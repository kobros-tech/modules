# -*- coding: utf-8 -*-
# -*- coding: utf-8 -*-
#############################################################################
#
#    kobros-tech Pvt. Ltd.
#
#    Copyright (C) 2020-TODAY kobros-tech(<https://www.linkedin.com/company/kobros-tech/>).
#    Author: Mohamed Alkobrosli(<https://www.linkedin.com/in/mohamed-alkobrosly/>)
#
#    You can modify it under the terms of the GNU AFFERO
#    GENERAL PUBLIC LICENSE (AGPL v3), Version 3.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU AFFERO GENERAL PUBLIC LICENSE (AGPL v3) for more details.
#
#    You should have received a copy of the GNU AFFERO GENERAL PUBLIC LICENSE
#    (AGPL v3) along with this program.
#    If not, see <http://www.gnu.org/licenses/>.
#
#############################################################################

{
    'name': "Awesome SVG Effect",
    'version': '17.0',
    'summary': """
        A custom SVG animation for overriding the default rainbow man SVG effect.
        """,

    'description': """
        Insert your company's logo instead of smiling rainbow man logo, or use our default SVG logo within the effect if you don't have a logo for your company.
    """,

    'price': 0.99,
    'currency': 'USD',

    'author': 'Abou Sajid (Mohamed Alkobrosli)',
    'company': 'kobros-tech',
    'maintainer': 'Mohamed Moustafa Alkobrosli',
    'website': "https://www.linkedin.com/company/kobros-tech/",
    'license': "AGPL-3",
    'images': ['static/description/banner.png'],
    'category': 'Productivity',
    'version': '0.1',
    'application': True,
    'installable': True,


    # any module necessary for this one to work correctly
    'depends': ['base', 'web', 'mail'],

    'assets': {
        'web.assets_backend': [
            'awesome_effect/static/src/**/*',
        ],
    }
}
