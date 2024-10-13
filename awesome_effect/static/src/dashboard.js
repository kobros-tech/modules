/** @odoo-module **/

import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
import { patch } from "@web/core/utils/patch";
import { RainbowMan } from "@web/core/effects/rainbow_man";
import { onWillStart } from "@odoo/owl";

//------------------------------------
patch(RainbowMan.prototype, {
    setup() {
        super.setup(...arguments);
        const user = useService("user");
        const company_id = user.context.allowed_company_ids[0];
        this.orm = useService("orm");
        onWillStart(async () => {
            // const domain = [["id", "=", company_id]];
            // const search_result = await this.orm.searchRead("res.company", domain, ["id", "name", "logo"], { limit: 1 });
            // const company_obj = search_result[0];

            const read_result = await this.orm.read("res.company", [company_id], ["id", "name", "logo"]);
            const company_obj = read_result[0];
            if (company_obj.logo) {
                this.logo = company_obj.logo;
            }
        });
    }
});
//------------------------------------

patch(RainbowMan, {
    template: "awesome_effect.RambooMan"
});

const effectRegistry = registry.category("effects");

effectRegistry.remove("rainbow_man")

function rainbowMan(env, params = {}) {
    let message = params.message;
    if (message instanceof jQuery) {
        console.log(
            "Providing a jQuery element to an effect is deprecated. Note that all event handlers will be lost."
        );
        message = message.html();
    } else if (message instanceof Element) {
        console.log(
            "Providing an HTML element to an effect is deprecated. Note that all event handlers will be lost."
        );
        message = message.outerHTML;
    } else if (!message) {
        message = env._t("Congratulations and blessings!");
    }
    if (env.services.user.showEffect) {
        /** @type {import("./rainbow_man").RainbowManProps} */
        if (params.img_url === "/web/static/img/smile.svg") {
            params.img_url = "/awesome_effect/static/src/icon.svg";
        }
        const props = {
            imgUrl: params.img_url || "/awesome_effect/static/src/icon.svg",
            fadeout: params.fadeout || "medium",
            message,
            Component: params.Component,
            props: params.props,
        };
        return { Component: RainbowMan, props };
    }
    env.services.notification.add(message);
}
effectRegistry.add("rainbow_man", rainbowMan);
