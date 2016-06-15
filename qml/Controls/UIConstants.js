/****************************************************************************
**
** Copyright (C) 2011 Nokia Corporation and/or its subsidiary(-ies).
** All rights reserved.
** Contact: Nokia Corporation (qt-info@nokia.com)
**
** This file is part of the Qt Components project.
**
** $QT_BEGIN_LICENSE:BSD$
** You may use this file under the terms of the BSD license as follows:
**
** "Redistribution and use in source and binary forms, with or without
** modification, are permitted provided that the following conditions are
** met:
**   * Redistributions of source code must retain the above copyright
**     notice, this list of conditions and the following disclaimer.
**   * Redistributions in binary form must reproduce the above copyright
**     notice, this list of conditions and the following disclaimer in
**     the documentation and/or other materials provided with the
**     distribution.
**   * Neither the name of Nokia Corporation and its Subsidiary(-ies) nor
**     the names of its contributors may be used to endorse or promote
**     products derived from this software without specific prior written
**     permission.
**
** THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
** "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
** LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
** A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
** OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
** SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
** LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
** DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
** THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
** (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
** OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE."
** $QT_END_LICENSE$
**
****************************************************************************/

.pragma library

//Qt.include("Variables.js")


//
// Variables
// __________________________________________________







function spin(arg1,arg2){
    return arg1;
}

var factor_color = 0.01;

var const_gold_mean  = 1.618;




//== Colors
//
//## Gray and brand colors for use across Bootstrap.

var color_gray_base ="#000";
var color_gray_darker = Qt.lighter(color_gray_base,0.135) ; //#222
var color_gray_dark = Qt.lighter(color_gray_base,0.20); //#333
var color_gray = Qt.lighter(color_gray_base,0.335); //#555
var color_gray_light =Qt.lighter(color_gray_base,0.467); //#777
var color_gray_lighter=Qt.lighter(color_gray_base,0.935); //#eee

var color_brand_primary = Qt.darker("#428bca",0.65)// #337ab7
var color_brand_success = "#5cb85c";
var color_brand_info = "#5bc0de";
var color_brand_warning= "#f0ad4e";
var color_brand_danger= "#d9534f";

var color_base_bg = "#fff";

// theme COLOrs
//主题色定位四种，
//1、为大标题背景，header背景色 ：文字色：255，255，255
//2、为副标题背景，header背景色 ：文字色：255，255，255
//3、增强内容背景色,
//3、内容背景色(white) ： 255，255，255;文字色：black
//4、全局内容背景色(grey) ： 245，246，247;文字色：black, darkBlue
//6、footer背景色

var color_theme_primary_back = "#2B2E4A"
var color_theme_primary_fore = "#E84545"
var color_theme_sub_fore = "#903749"
var color_theme_sub_back = "#53354A"

//.body_back {
//  Color: #202930;
//}

//.body_fore {
//  Color: #FFFFFF;
//}

//.body_fore_active {
//  Color: #19EA8C;
//}

//.body_fore_negative {
//  Color: #61727A;
//}

//var COLOR_BASE_BLACK ="#111111"
var COLOR_BASE_BLACK ="#2e2e2e"
var COLOR_BASE_BLAKC_TRUE ="#111111"

var COLOR_BASE_WHITE ="#ffffff"
var COLOR_BASE_TRANSPARENT = "#00000000"


var COLOR_BASE_RED ="#CC0033"
var COLOR_BASE_YELLOW ="#BF9852"
var COLOR_BASE_BLUE ="#4591ff"  //#4591ff
var COLOR_BASE_PURPLE ="#804D4D"
var COLOR_BASE_GREEN ="#009933" //绿
var COLOR_BASE_GREY = "#A0A0A0"  // 灰
var COLOR_BASE_ORANGE ="#FFCC00"   //"#FFB000" //桔黄色


var COLOR_BASE_ORANGE_DARK ="#AA8800"


var COLOR_BASE_GREY_SLIVER = "#F8F8F8"    //"#F2F2F2"  //亮灰 #EAEAEA #EAEAEA
var COLOR_BASE_GREY_FOR_BTBACK = "#F3F3F3"  // 亮灰 "#A0A0A0" Line
var COLOR_BASE_GREY_WIN_BG = "#F2F2F2"  // 亮灰 "#A0A0A0" Line
var COLOR_BASE_GREY_WIN_HOVER = "#DADADA" //qian hui
var COLOR_BASE_GREY_WIN_PRESS = "#C2C2C2" //暗灰
var COLOR_BASE_GREY_DISABLE = "#b2b2b4" //apple gray
var COLOR_BASE_GREY_FOR_BACK = COLOR_BASE_GREY  // 灰 "#A0A0A0" Line
var COLOR_BASE_GREY_ACTIVE ="#8c8c8c"
var COLOR_BASE_GREY_BACKGROUD =  Qt.rgba(247,247,247,0)    //"#f0f1f2" ; //240,241,242  247,247,247
var COLOR_BASE_GREY_APPLY_BG=Qt.rgba(117,117, 117,0);  //#757575
var COLOR_BASE_GREY_FOR_HEAD ="#525252" //暗灰 //666666
var COLOR_BASE_GREY_BLACK ="#2D2D2D"  //#333333 黑灰
var COLOR_BASE_GREY_BLACK_2 ="#1D1D1D"  //#333333 黑灰
var COLOR_BASE_GREY_UNDERLINE ="#dddddd" //下划线
var COLOR_BASE_CONTENT_BACKGROUND_GRAY = "#F5F5F5" //灰
var COLOR_BASE_CONTENT_BACKGROUND_INNER =Qt.rgba(255,255,255,1.0)
var COLOR_BASE_CONTENT_BACKGROUND_BORDER ="#E4E4E4"





var COLOR_BASE_GREEN_LIGHT= "#EDF3FB"  //淡绿
var COLOR_BASE_GREEN_HIGHTLIGHT ="#00C249" //亮绿 4DC060
var COLOR_BASE_GREEN_NORMAL =COLOR_BASE_GREEN //绿
var COLOR_BASE_GREEN_GRAY ="#649A70"
var COLOR_BASE_GREEN_MAIN ="#3D5F44"  //暗绿 3D5F44


//Blue
var COLOR_BASE_BLUE_LIGHT ="#2EACF5" //淡Blue
var COLOR_BASE_BLUE_BASE ="#0064C8" //Blue
var COLOR_BASE_BLUE_DARK ="#0064C8" //暗Blue

//yellow
var COLOR_BASE_YELLOW_LIGHT ="#BF9852" //淡Blue
var COLOR_BASE_YELLOW_BASE = "#FFCC00" //"#BF9852" //Blue
var COLOR_BASE_YELLOW_DARK ="#AA8800" //暗Blue



//white
var COLOR_BASE_WHITE_LIGHT = "#FFFFFF"
var COLOR_BASE_WHITE_BASE = "#FCFCFC"
var COLOR_BASE_WHITE_DARK = "#DCDCDC"

//Grey
var COLOR_BASE_GRAY_LIGHT = "#b2b2b4"
var COLOR_BASE_GRAY_BASE = "#A0A0A0"
var COLOR_BASE_GRAY_DARK = "#757575"  //"#525252"

//Black
var COLOR_BASE_BLACK_LIGHT ="#353739"
var COLOR_BASE_BLACK_BASE ="#2e2e2e"  //
var COLOR_BASE_BLACK_DARK ="#000000"
//
// "#F2F2F2" zang qing
// "#1C1C1E" hui hei

var color_theme_window_back =  COLOR_BASE_BLACK_BASE  // skyblue "#2D2D2D"//drak--  //"#2D2D30"   //"#1C1C1E"
var color_theme_window_back_active = COLOR_BASE_BLACK_BASE // skyblue
var color_theme_window_main_active = COLOR_BASE_BLACK_BASE // COLOR_BASE_BLUE_LIGHT // blue ---
var color_theme_window_main_negactive = COLOR_BASE_BLACK_LIGHT //apple gray


//new



var color_theme_body_back_negative = "#61727A"
var color_theme_body_back = "#F2F2F2"
var color_theme_body_back_active = color_theme_window_main_active
var color_theme_body_fore_negative = "#61727A"
var color_theme_body_fore = "#000000"
var color_theme_body_fore_active = color_theme_window_main_active












// main dailog and main
var color_theme_header_main_back_negative = "#202930"
var color_theme_header_main_back = "#202930"
var color_theme_header_main_back_active = color_theme_window_main_active
var color_theme_header_main_fore_negative = "#202930"
var color_theme_header_main_fore = "#202930"
var color_theme_header_main_fore_active = color_theme_window_main_active


var color_theme_body_main_back_negative = "#61727A"
var color_theme_body_main_back = "#F2F2F2"
var color_theme_body_main_back_active = color_theme_window_main_active
var color_theme_body_main_fore_negative = "#61727A"
var color_theme_body_main_fore = "#000000"
var color_theme_body_main_fore_active = color_theme_window_main_active


var color_theme_footer_main_back_negative = "#202930"
var color_theme_footer_main_back = "#202930"
var color_theme_footer_main_back_active = color_theme_window_main_active
var color_theme_footer_main_fore_negative = "#202930"
var color_theme_footer_main_fore = "#202930"
var color_theme_footer_main_fore_active = color_theme_window_main_active


var color_theme_content_main_back_negative = "#202930"
var color_theme_content_main_back = "#202930"
var color_theme_content_main_back_active = color_theme_window_main_active
var color_theme_content_main_fore_negative = "#202930"
var color_theme_content_main_fore = "#202930"
var color_theme_content_main_fore_active = color_theme_window_main_active



// sub dialog
var color_theme_header_sub_back_negative = "#202930"
var color_theme_header_sub_back =COLOR_BASE_BLUE_BASE // blue "#464646"    //"#00B4FB"    //"#464646"   //"#14E28D"
var color_theme_header_sub_back_active = color_theme_window_main_active
var color_theme_header_sub_fore_negative = "#202930"
var color_theme_header_sub_fore ="#fff" //white
var color_theme_header_sub_fore_active = "#93E000" //green


var color_theme_body_sub_back_negative = COLOR_BASE_WHITE_DARK
var color_theme_body_sub_back = COLOR_BASE_WHITE_BASE
var color_theme_body_sub_back_active = color_theme_window_main_active
var color_theme_body_sub_fore_negative = "#61727A"
var color_theme_body_sub_fore = COLOR_BASE_BLACK_BASE
var color_theme_body_sub_fore_active = color_theme_window_main_active



var color_theme_footer_sub_fore_negative = color_theme_body_sub_back_negative
var color_theme_footer_sub_back = COLOR_BASE_BLACK_LIGHT
var color_theme_footer_sub_fore_active = color_theme_body_sub_back_active
var color_theme_footer_sub_fore_negative = color_theme_body_sub_fore_negative
var color_theme_footer_sub_fore = color_theme_body_sub_fore
var color_theme_footer_sub_fore_active = color_theme_body_sub_fore_active


var color_theme_content_sub_back_negative = "#202930"
var color_theme_content_sub_back = COLOR_BASE_WHITE_BASE
var color_theme_content_sub_back_active = color_theme_window_main_active
var color_theme_content_sub_fore_negative = "#202930"
var color_theme_content_sub_fore = COLOR_BASE_BLUE_LIGHT
var color_theme_content_sub_fore_active = COLOR_BASE_BLACK_DARK





var color_theme_toolBar_back_negative = "#FFFFFF"
var color_theme_toolBar_back = "#0064C8"   //"#1E6D8C" dark blue
var color_theme_toolBar_back_active = "#FFFFFF"
var color_theme_toolBar_fore_negative = "#61727A"
var color_theme_toolBar_fore = "#FFFFFF"
var color_theme_toolBar_fore_active = "#FFFFFF"



var color_theme_control_back_negative = "#E6E6E6"
var color_theme_control_back = color_theme_window_main_active
var color_theme_control_back_active = color_theme_window_main_active
var color_theme_control_fore_negative = color_base_bg
var color_theme_control_fore = "#FFFFFF"
var color_theme_control_fore_active = "#54A6FF" // blue--


var color_theme_player_back = "#2D7D9A"
var color_theme_player_fore = "#ffffff"


//== Scaffolding
//
//## Settings for some of the most global styles.

//** Background color for `<body>`.
var color_body_bg =  color_base_bg;

//** Global text color on `<body>`.
var color_text_color = color_gray_dark;

//** Global textual link color.
var color_link_color = color_brand_primary;

//** Link hover color set via `Qt.darker()` function.
var color_link_hover_color = Qt.darker(color_link_color,0.15);
//** Link hover decoration.
var str_link_hover_decoration ="underline";

//== Typography
//
//## Font, line_height, and color for body text, headings, and more.

//var font_family_sans_serif =  "Helvetica Neue", Helvetica, Arial, sans_serif;
//var font_family_serif =       Georgia, "Times New Roman", Times, serif;
////** Default monospace fonts for `<code>`, `<kbd>`, and `<pre>`.
//var font_family_monospace =   Menlo, Monaco, Consolas, "Courier New", monospace;
//var font_family_base =        var font_family_sans_serif;

var font_family_sans_serif = "sans_serif";
var font_family_serif ="serif";
var font_family_monospace = "monospace";
var font_family_base = font_family_sans_serif;


var font_size_base = 14;
var font_size_large = Math.ceil(font_size_base * 1.25); //18
var font_size_small= Math.ceil(font_size_base * 0.85); //12

var font_size_logo = Math.floor(font_size_base * 6.6); //36
var font_size_h1= Math.floor(font_size_base * 2.6); //36
var font_size_h2= Math.floor(font_size_base *2.15); //30
var font_size_h3= Math.ceil(font_size_base * 1.7); //24
var font_size_h4= Math.ceil(font_size_base * 1.25); //18
var font_size_h5= font_size_base
var font_size_h6= Math.ceil(font_size_base * 0.85); //12

var font_size_icon_logo_main =64
var font_size_icon_logo_sub = 48
var font_size_icon_logo_base = 42
var font_size_icon_18 = 18
var font_size_icon_20 = 20
var font_size_icon_22 = 22
var font_size_icon_large = 32
var font_size_icon_base =24
var font_size_icon_small = 20
var font_size_icon_mini = 16


//** Unit_less `line_height` for use in components like buttons.
var line_height_base =   1.428571429; // 20/14
//** Computed "line_height" (`font_size` * `line_height`) for use with `margin`, `padding`, etc.
var line_height_computed =    Math.floor(( font_size_base * line_height_base)); // ~20

//** By default, this inherits from the `<body>`.
var headings_font_family=   font_family_base;
 var headings_font_weight=500;
var headings_line_height =1.1;
var headings_color = color_body_bg;


//== Iconography
//
//## Specify custom location and filename of the included Glyphicons icon font. Useful for those including Bootstrap via Bower.

//** Load fonts from this directory.
//var icon_font_path =          "../fonts/";
//** File name for all font files.
//var icon_font_name =          "glyphicons_halflings_regular";
//** Element ID within SVG icon file.
//var icon_font_svg_id =        "glyphicons_halflingsregular";

var icon_font_path ="   ";
var icon_font_name = "bsf";
var icon_font_svg_id = "glyphicons_halflingsregular";

//== Components
//
//## Define common padding and border radius sizes and more. Values based on 14  text and 1.428 line_height (~20  to start).

var padding_base_vertical = 6;
var padding_base_horizontal =12;

var padding_large_vertical =10;
var padding_large_horizontal =16;

var padding_xl_vertical =14;
var padding_xl_horizontal =20;

var padding_small_vertical =5;
var padding_small_horizontal= 10;

var padding_xs_vertical =3;
var padding_xs_horizontal =5;

var line_height_large = 1.3333333; // extra decimals for Win 8.1 Chrome
var line_height_small =1.5;

var border_radius_base = 4;
var border_radius_large = 6;
var border_radius_small = 3;

//** Global color for active items (e.g., navs or dropdowns).
var component_active_color =  color_base_bg;
//** Global background color for active items (e.g., navs or dropdowns).
var component_active_bg = color_brand_primary;

//** Width of the `border` for generating carets that indicator dropdowns.
var caret_width_base =   4;
//** Carets increase slightly in size for larger components.
var caret_width_large = 5;


//== Tables
//
//## Customizes the `.table` component with basic values, each used across all table variations.

//** Padding for `<th>`s and `<td>`s.
var table_cell_padding =8;
//** Padding for cells in `.table_condensed`.
var table_condensed_cell_padding =5;
//** Default background color used for all tables.
var table_bg =  Qt.transparent;
//** Background color used for `.table_striped`.
var table_bg_accent ="#f9f9f9";
//** Background color used for `.table_hover`.
var table_bg_hover = "#f5f5f5";
var table_bg_active = table_bg_hover;

//** Border color for table and cell borders.
var table_border_color = "#ddd";


//== Buttons
//
//## For each of Bootstrap's buttons, define text, background and border color.

var btn_font_weight =  "normal";

var btn_default_color = color_gray_dark;
var btn_default_bg = color_body_bg;
var btn_default_border = "#ccc";

var btn_primary_color =    color_base_bg;
var btn_primary_bg =  color_brand_primary;
var btn_primary_border = Qt.darker(btn_primary_bg,0.05);

var btn_success_color =  color_base_bg;
var btn_success_bg =  color_brand_success;
var btn_success_border =   Qt.darker(btn_success_bg,0.05);

var btn_info_color =                  color_base_bg;
var btn_info_bg =                   color_brand_info;
var btn_info_border =  Qt.darker(btn_info_bg,0.05);

var btn_warning_color =               color_base_bg;
var btn_warning_bg =                 color_brand_warning;
var btn_warning_border = Qt.darker(btn_warning_bg,0.05);

var btn_danger_color =                color_base_bg;
var btn_danger_bg =                  color_brand_danger;
var btn_danger_border = Qt.darker(btn_danger_bg,0.05);

var btn_link_disabled_color =        color_gray_light;


////== Forms
////
////##

////** `<input>` background color
var input_bg =                        color_base_bg;
////** `<input disabled>` background color
var input_bg_disabled =              color_gray_lighter;

////** Text color for `<input>`s
var input_color =  color_gray;
////** `<input>` border color
var input_border =  "#ccc";
var input_border_radius_base =            border_radius_base;
////** Large `.form_control` border radius
var input_border_radius_large =       border_radius_large;
////** Small `.form_control` border radius
var input_border_radius_small =       border_radius_small;

////** Border color for inputs on focus
var input_border_focus =             "#66afe9";

////** Placeholder text color
var input_color_placeholder =        "#999";

////** Default `.form_control` height
var input_height_base =              ( line_height_computed + ( padding_base_vertical * 2) + 2);
////** Large `.form_control` height
var input_height_large =             (Math.ceil( font_size_large *  line_height_large) + ( padding_large_vertical * 2) + 2);
////** Small `.form_control` height
var input_height_small =             (Math.floor( font_size_small *  line_height_small) + ( padding_small_vertical * 2) + 2);

////** `.form_group` margin
var form_group_margin_bottom =       15 ;

//图例
var legend_color =                   color_gray_dark;
var legend_border_color =            "#e5e5e5";

////** Background color for textual input addons
var input_group_addon_bg =           color_gray_lighter;
////** Border color for textual input addons
var input_group_addon_border_color = input_border;

////** Disabled cursor for form controls and buttons.
var cursor_disabled =  Qt.ForbiddenCursor;
var cursor_hand =  Qt.PointingHandCursor;

////== Dropdowns
////
////## Dropdown menu container and contents.

////** Background for the dropdown menu.
var dropdown_bg =                     color_base_bg;
////** Dropdown menu `border_color`.
var dropdown_border =                Qt.rgba(0,0,0,0.15);
////** Dropdown menu `border_color` **for IE8**.
var dropdown_fallback_border =       "#ccc";
////** Divider color for between dropdown items.
var dropdown_divider_bg =            "#e5e5e5";

////** Dropdown link text color.
var dropdown_link_color =            color_gray_dark;
////** Hover color for dropdown links.
var dropdown_link_hover_color =   Qt.darker(color_gray_dark,0.05) ;
////** Hover background for dropdown links.
var dropdown_link_hover_bg =         "#f5f5f5";

////** Active dropdown menu item text color.
var dropdown_link_active_color =      component_active_color;
////** Active dropdown menu item background color.
var dropdown_link_active_bg =         component_active_bg;

////** Disabled dropdown menu item background color.
var dropdown_link_disabled_color =   color_gray_light;

////** Text color for headers within dropdown menus.
var dropdown_header_color =          color_gray_light;

////** Deprecated `var dropdown_caret_color` as of v3.1.0
var dropdown_caret_color =           "#000";


////__ Z_index master list
////
//// Warning = Avoid customizing these values. They're used for a bird's eye view
//// of components dependent on the z_axis and are designed to all work together.
////
//// Note = These variables are not generated into the Customizer.

var zindex_navbar =            1000;
var zindex_dropdown =          1000;
var zindex_popover =           1060;
var zindex_tooltip =           1070;
var zindex_navbar_fixed =      1030;
var zindex_modal_background =  1040;
var zindex_modal =             1050;


////== Media queries breakpoints
////
////## Define the breakpoints at which your layout will change, adapting to different screen sizes.

//// Extra small screen / phone
////** Deprecated `var screen_xs` as of v3.0.1
var screen_xs =                  480 ;
////** Deprecated `var screen_xs_min` as of v3.2.0
var screen_xs_min =               screen_xs;
////** Deprecated `var screen_phone` as of v3.0.1
var screen_phone =                screen_xs_min;

//// Small screen / tablet
////** Deprecated `var screen_sm` as of v3.0.1
var screen_sm =                  768 ;
var screen_sm_min =               screen_sm;
////** Deprecated `var screen_tablet` as of v3.0.1
var screen_tablet =             screen_sm_min;

//// Medium screen / desktop
////** Deprecated `var screen_md` as of v3.0.1
var screen_md =                  992 ;
var screen_md_min =               screen_md;
////** Deprecated `var screen_desktop` as of v3.0.1
var screen_desktop =              screen_md_min;

//// Large screen / wide desktop
////** Deprecated `var screen_lg` as of v3.0.1
var screen_lg =                  1200 ;
var screen_lg_min =               screen_lg;
//** Deprecated `var screen_lg_desktop` as of v3.0.1
var screen_lg_desktop =           screen_lg_min;

// So media queries don't overlap when required, provide a maximum
var screen_xs_max =              ( screen_sm_min - 1);
var screen_sm_max =              ( screen_md_min - 1);
var screen_md_max =              ( screen_lg_min - 1);


//== Grid system
//
//## Define your custom responsive grid.

//** Number of columns in the grid.
var grid_columns =              12;
//** Padding between columns. Gets divided in half for the left and right.
var grid_gutter_width =         30;
// Navbar collapse
//** Point at which the navbar becomes uncollapsed.
var grid_float_breakpoint =      screen_sm_min;
//** Point at which the navbar begins collapsing.
var grid_float_breakpoint_max = ( grid_float_breakpoint - 1);


//== Container sizes
//
//## Define the maximum width of `.container` for different screen sizes.

// Small screen / tablet
var container_tablet =             (720  +  grid_gutter_width);
//** For `var screen_sm_min` and up.
var container_sm =                  container_tablet;

// Medium screen / desktop
var container_desktop =            (940  +  grid_gutter_width);
//** For `var screen_md_min` and up.
var container_md =                  container_desktop;

// Large screen / wide desktop
var container_large_desktop =      (1140  +  grid_gutter_width);
//** For `var screen_lg_min` and up.
var container_lg =                  container_large_desktop;


//== Navbar
//
//##

// Basics of a navbar
var navbar_height =                    50 ;
var navbar_margin_bottom =              line_height_computed;
var navbar_border_radius =              border_radius_base;
var navbar_padding_horizontal =        Math.floor(( grid_gutter_width / 2));
var navbar_padding_vertical =          (( navbar_height - line_height_computed) / 2);
var navbar_collapse_max_height =       340 ;

var navbar_default_color =             "#777";
var navbar_default_bg =                "#f8f8f8";
var navbar_default_border =    Qt.darker(navbar_default_bg,65*factor_color) ;

// Navbar links
var navbar_default_link_color =                "#777";
var navbar_default_link_hover_color =          "#333";
var navbar_default_link_hover_bg =             Qt.transparent;
var navbar_default_link_active_color =         "#555";
var navbar_default_link_active_bg =            Qt.darker(navbar_default_bg,65*factor_color) ;
var navbar_default_link_disabled_color =       "#ccc";
var navbar_default_link_disabled_bg =          Qt.transparent;

// Navbar brand label
var navbar_default_brand_color =                navbar_default_link_color;
var navbar_default_brand_hover_color =         Qt.darker(navbar_default_brand_color,0.1) ;
var navbar_default_brand_hover_bg =            Qt.transparent;

// Navbar toggle
var navbar_default_toggle_hover_bg =           "#ddd";
var navbar_default_toggle_icon_bar_bg =        "#888";
var navbar_default_toggle_border_color =       "#ddd";


// Inverted navbar
// Reset inverted navbar basics
var navbar_inverse_color =                      Qt.lighter(color_gray_light, 15*factor_color);
var navbar_inverse_bg =                         "#222";
var navbar_inverse_border =   Qt.darker(navbar_inverse_bg,10*factor_color)  ;

// Inverted navbar links
var navbar_inverse_link_color =                 Qt.lighter(color_gray_light, 15*factor_color);
var navbar_inverse_link_hover_color =            color_base_bg;
var navbar_inverse_link_hover_bg =              Qt.transparent;
var navbar_inverse_link_active_color =           navbar_inverse_link_hover_color;
var navbar_inverse_link_active_bg =             Qt.darker(navbar_inverse_bg, 10*factor_color);
var navbar_inverse_link_disabled_color =        "#444";
var navbar_inverse_link_disabled_bg =          Qt.transparent;

// Inverted navbar brand label
var navbar_inverse_brand_color =                 navbar_inverse_link_color;
var navbar_inverse_brand_hover_color =           color_base_bg;
var navbar_inverse_brand_hover_bg =            Qt.transparent;

//// Inverted navbar toggle
var navbar_inverse_toggle_hover_bg =            "#333";
var navbar_inverse_toggle_icon_bar_bg =          color_base_bg;
var navbar_inverse_toggle_border_color =        "#333";


//== Navs
//
//##

//=== Shared nav styles
var nav_link_padding =                          10;
var nav_link_hover_bg =                        color_gray_lighter;

var nav_disabled_link_color =                   color_gray_light;
var nav_disabled_link_hover_color =             color_gray_light;

//== Tabs
var nav_tabs_border_color =                     "#ddd";

var nav_tabs_link_hover_border_color =          color_gray_lighter;

var nav_tabs_active_link_hover_bg =            color_body_bg;
var nav_tabs_active_link_hover_color =          color_gray;
var nav_tabs_active_link_hover_border_color =   "#ddd";

var nav_tabs_justified_link_border_color =           "#ddd";
var nav_tabs_justified_active_link_border_color =     color_body_bg;

//== Pills 药丸
var nav_pills_border_radius =                   border_radius_base;
var nav_pills_active_link_hover_bg =            component_active_bg;
var nav_pills_active_link_hover_color =         component_active_color;


//== Pagination 分页
//
//##

var pagination_color =                     color_link_color;
var pagination_bg =                         color_base_bg;
var pagination_border =                    "#ddd";

var pagination_hover_color =               color_link_hover_color;
var pagination_hover_bg =                  color_gray_lighter;
var pagination_hover_border =              "#ddd";

var pagination_active_color =               color_base_bg;
var pagination_active_bg =                 color_brand_primary;
var pagination_active_border =             color_brand_primary;

var pagination_disabled_color =            color_gray_light;
var pagination_disabled_bg =                color_base_bg;
var pagination_disabled_border =           "#ddd";


//== Pager
//
//##

var pager_bg =                              pagination_bg;
var pager_border =                          pagination_border;
var pager_border_radius =                  15 ;

var pager_hover_bg =                        pagination_hover_bg;

var pager_active_bg =                       pagination_active_bg;
var pager_active_color =                    pagination_active_color;

var pager_disabled_color =                  pagination_disabled_color;


////== Jumbotron 电视机的超大屏幕
////
////##

var jumbotron_padding =              30 ;
var jumbotron_color =                color_text_color;
var jumbotron_bg =                   color_gray_lighter;
var jumbotron_heading_color =        color_base_bg;
var jumbotron_font_size =            Math.ceil((font_size_base * 1.5));


//== Form states and alerts
//
//## Define colors for form feedback states and, by default, alerts.

var state_success_text =             "#3c763d";
var state_success_bg =               "#dff0d8";
var state_success_border =           Qt.darker(spin(state_success_bg, -10), 5*factor_color);

var state_info_text =                "#31708f";
var state_info_bg =                  "#d9edf7";
var state_info_border =              Qt.darker(spin(state_info_bg, -10), 7*factor_color);

var state_warning_text =             "#8a6d3b";
var state_warning_bg =               "#fcf8e3";
var state_warning_border =           Qt.darker(spin(state_warning_bg, -10), 5*factor_color);

var state_danger_text =              "#a94442";
var state_danger_bg =                "#f2dede";
var state_danger_border =            Qt.darker(spin(state_danger_bg, -10), 5*factor_color);


//== Tooltips
//
//##

//** Tooltip max width
var tooltip_max_width =           200 ;
//** Tooltip text color
var tooltip_color =                color_base_bg;
//** Tooltip background color
var tooltip_bg =                  "#000";
var tooltip_opacity =             0.9;

//** Tooltip arrow width
var tooltip_arrow_width =         5 ;
//** Tooltip arrow color
var tooltip_arrow_color =         tooltip_bg;


//== Popovers
//
//##

//** Popover body background color
var popover_bg =                           color_base_bg;
//** Popover maximum width
var popover_max_width =                   276 ;
//** Popover border color
var popover_border_color =                Qt.rgba(0,0,0,.2);
//** Popover fallback border color
var popover_fallback_border_color =       "#ccc";

//** Popover title background color
var popover_title_bg =                    Qt.darker(popover_bg, 3*factor_color);

//** Popover arrow width
var popover_arrow_width =                 10 ;
//** Popover arrow color
var popover_arrow_color =                 popover_bg;

//** Popover outer arrow width
var popover_arrow_outer_width =           (popover_arrow_width + 1);
//** Popover outer arrow color
var popover_arrow_outer_color =           Qt.darker(popover_border_color, 5*factor_color);
//** Popover outer arrow fallback color
var popover_arrow_outer_fallback_color =  Qt.darker(popover_fallback_border_color, 20*factor_color);


//== Labels
//
//##

//** Default label background color
var label_default_bg =            color_gray_light;
//** Primary label background color
var label_primary_bg =             color_brand_primary;
//** Success label background color
var label_success_bg =             color_brand_success;
//** Info label background color
var label_info_bg =                color_brand_info;
//** Warning label background color
var label_warning_bg =             color_brand_warning;
//** Danger label background color
var label_danger_bg =              color_brand_danger;

//** Default label text color
var label_color =                  color_base_bg;
//** Default text color of a linked label
var label_link_hover_color =       color_base_bg;


//== Modals 模态框（Modal）插件
//
//##

//** Padding applied to the modal body
var modal_inner_padding =         15 ;

//** Padding applied to the modal title
var modal_title_padding =         15 ;
//** Modal title line_height
var modal_title_line_height =      line_height_base;

//** Background color of modal content area
var modal_content_bg =                              color_base_bg;
//** Modal content border color
var modal_content_border_color =                   Qt.rgba(0,0,0,.2);
//** Modal content border color **for IE8**
var modal_content_fallback_border_color =          "#999";

//** Modal backdrop background color
var modal_backdrop_bg =           "#000";
//** Modal backdrop opacity
var modal_backdrop_opacity =      .5;
//** Modal header border color
var modal_header_border_color =   "#e5e5e5";
//** Modal footer border color
var modal_footer_border_color =    modal_header_border_color;

var modal_lg =                    900 ;
var modal_md =                    600 ;
var modal_sm =                    300 ;


//== Alerts
//
//## Define alert colors, border radius, and padding.

var alert_padding =               15 ;
var alert_border_radius =          border_radius_base;
var alert_link_font_weight =      "bold";

var alert_success_bg =             state_success_bg;
var alert_success_text =           state_success_text;
var alert_success_border =         state_success_border;

var alert_info_bg =                state_info_bg;
var alert_info_text =              state_info_text;
var alert_info_border =            state_info_border;

var alert_warning_bg =             state_warning_bg;
var alert_warning_text =           state_warning_text;
var alert_warning_border =         state_warning_border;

var alert_danger_bg =              state_danger_bg;
var alert_danger_text =            state_danger_text;
var alert_danger_border =          state_danger_border;


//== Progress bars
//
//##

//** Background color of the whole progress component
var progress_bg =                 "#f5f5f5";
//** Progress bar text color
var progress_bar_color =           color_base_bg;
//** Variable for setting rounded corners on progress bar.
var progress_border_radius =       border_radius_base;

//** Default progress bar color
var progress_bar_bg =              color_brand_primary;
//** Success progress bar color
var progress_bar_success_bg =      color_brand_success;
//** Warning progress bar color
var progress_bar_warning_bg =      color_brand_warning;
//** Danger progress bar color
var progress_bar_danger_bg =       color_brand_danger;
//** Info progress bar color
var progress_bar_info_bg =         color_brand_info;


//== List group
//
//##

//** Background color on `.list_group_item`
var list_group_bg =                  color_base_bg;
//** `.list_group_item` border color
var list_group_border =             "#ddd";
//** List group border radius
var list_group_border_radius =       border_radius_base;

//** Background color of single list items on hover
var list_group_hover_bg =           "#f5f5f5";
//** Text color of active list items
var list_group_active_color =        component_active_color;
//** Background color of active list items
var list_group_active_bg =           component_active_bg;
//** Border color of active list elements
var list_group_active_border =       list_group_active_bg;
//** Text color for content within active list items
var list_group_active_text_color =  Qt.lighter(list_group_active_bg, 40*factor_color);

//** Text color of disabled list items
var list_group_disabled_color =      color_gray_light;
//** Background color of disabled list items
var list_group_disabled_bg =         color_gray_lighter;
//** Text color for content within disabled list items
var list_group_disabled_text_color =  list_group_disabled_color;

var list_group_link_color =         "#555";
var list_group_link_hover_color =    list_group_link_color;
var list_group_link_heading_color = "#333";


//== Panels
//
//##

var panel_bg =                     color_base_bg;
var panel_body_padding =          15 ;
var panel_heading_padding_v=       10  ;
var panel_heading_padding_h=       15 ;
var panel_footer_padding_v =        panel_heading_padding_v;
var panel_footer_padding_h =        panel_heading_padding_h;
var panel_border_radius =          border_radius_base;

//** Border color for elements within panels
var panel_inner_border =          "#ddd";
var panel_footer_bg =             "#f5f5f5";

var panel_default_text =          color_gray_dark;
var panel_default_border =        "#ddd";
var panel_default_heading_bg =    "#f5f5f5";

var panel_primary_text =           color_base_bg;
var panel_primary_border =        color_brand_primary;
var panel_primary_heading_bg =    color_brand_primary;

var panel_success_text =           state_success_text;
var panel_success_border =         state_success_border;
var panel_success_heading_bg =     state_success_bg;

var panel_info_text =              state_info_text;
var panel_info_border =            state_info_border;
var panel_info_heading_bg =        state_info_bg;

var panel_warning_text =           state_warning_text;
var panel_warning_border =         state_warning_border;
var panel_warning_heading_bg =     state_warning_bg;

var panel_danger_text =            state_danger_text;
var panel_danger_border =          state_danger_border;
var panel_danger_heading_bg =      state_danger_bg;


//== Thumbnails
//
//##

//** Padding around the thumbnail image
var thumbnail_padding =           4 ;
//** Thumbnail background color
var thumbnail_bg =                 color_body_bg;
//** Thumbnail border color
var thumbnail_border =            "#ddd";
//** Thumbnail border radius
var thumbnail_border_radius =      border_radius_base;

//** Custom text color for thumbnail captions
var thumbnail_caption_color =      color_text_color;
//** Padding around the thumbnail caption
var thumbnail_caption_padding =   9 ;


//== Wells
//
//##

var well_bg =                     "#f5f5f5";
var well_border =                 Qt.darker(well_bg, 7*factor_color);


//== Badges
//
//##

var badge_color =                  color_base_bg;
//** Linked badge text color on hover
var badge_link_hover_color =       color_base_bg;
var badge_bg =                    color_gray_light;

//** Badge text color in active nav link
var badge_active_color =           color_link_color;
//** Badge background color in active nav link
var badge_active_bg =              color_base_bg;

var badge_font_weight =           "bold";
var badge_line_height =           1;
var badge_border_radius =         10 ;



//== dialog
var dialog_border_radius = 0;


//== Breadcrumbs
//
//##

var breadcrumb_padding_vertical =   8 ;
var breadcrumb_padding_horizontal = 15 ;
//** Breadcrumb background color
var breadcrumb_bg =                 "#f5f5f5";
//** Breadcrumb text color
var breadcrumb_color =              "#ccc";
//** Text color of current page in the breadcrumb
var breadcrumb_active_color =       color_gray_light;
//** Textual separator for between breadcrumb elements
var breadcrumb_separator =          "/";


//== Carousel
//
//##

var carousel_text_shadow_color =   Qt.rgba(0,0,0,.6);                      ;//0 1  2  rgba(0,0,0,.6);

var carousel_control_color =                       color_base_bg;
var carousel_control_width =                      0.15;
var carousel_control_opacity =                    .5;
var carousel_control_font_size =                  20 ;

var carousel_indicator_active_bg =                 color_base_bg;
var carousel_indicator_border_color =              color_base_bg;

var carousel_caption_color =                       color_base_bg;


//== Close
//
//##

var close_font_weight =           "bold";
var close_color =                 "#000";
var close_text_shadow_color =  color_base_bg        // 0 1  0  color_base_bg;


//== Code
//
//##

var code_color =                  "#c7254e";
var code_bg =                     "#f9f2f4";

var kbd_color =                    color_base_bg;
var kbd_bg =                      "#333";

var pre_bg =                      "#f5f5f5";
var pre_color =                   color_gray_dark;
var pre_border_color =            "#ccc";
var pre_scrollable_max_height =   340 ;


//== Type
//
//##

//** Horizontal offset for forms and lists.
var component_offset_horizontal = 180 ;
//** Text muted color
var text_muted =                  color_gray_light;
//** Abbreviations and acronyms border color
var abbr_border_color =           color_gray_light;
//** Headings small color
var headings_small_color =        color_gray_light;
//** Blockquote small color
var blockquote_small_color =      color_gray_light;
//** Blockquote font size
var blockquote_font_size =        (font_size_base * 1.25);
//** Blockquote border color
var blockquote_border_color =     color_gray_lighter;
//** Page header border color
var page_header_border_color =    color_gray_lighter;
//** Width of horizontal description list titles
var dl_horizontal_offset =      component_offset_horizontal;
//** Horizontal line color.
var hr_border =                   color_gray_lighter;




///////////////////////////////////////////////////////////

var FONT_FAMILY = "Microsoft Yahei"; //"Tahoma";
//"Segoe UI";//"Microsoft JhengHei UI";"微软雅黑";,Verdana,Simsun, ,"SimHei";
var FONT_FAMILY_LIGHT = "Microsoft Yahei Light"

// we use a fallback font when language is set to farsi
var FONT_FAMILY_FARSI = "Arial"
var FONT_FAMILY_LIGHT_FARSI = "Arial"


var PixelDensity_SIZE=5.0



var FONT_H0 = 32;  //px
var FONT_H1 = 28;  //px
var FONT_H2 = 22;  //px
var FONT_H3 = 18;  //px
var FONT_H4 = 16;
var FONT_H5 = 14;
var FONT_BODY = 12;


var FONT_XXLARGE = FONT_H0;
var FONT_XLARGE  = 32;
var FONT_LARGE   = 28;
var FONT_SLARGE  = 26;
var FONT_MEDIUM =26;
var FONT_DEFAULT = 24;
var FONT_LSMALL  = 22;
var FONT_SMALL   = 20;
var FONT_XSMALL  = 18;
var FONT_XXSMALL = 16;
var FONT_XXXSMALL = 14;



var TYPE_SUMMARY=100
var TYPE_DETAIL =101



var GOLDEN_RATIO = 0.618

var STYLE_COLOR_FORGROUND ="#000000" //"#e65c8a" 关键醒目色，标题，提示色






var COLOR_BASE_BACKGROUND = COLOR_BASE_WHITE;


var COLOR_BASE_THEME_GREEN_MAIN =COLOR_BASE_GREEN_MAIN
var COLOR_BASE_THEME_GREEN_MAIN_FONT =COLOR_BASE_WHITE
var COLOR_BASE_THEME_GREEN_SUB =COLOR_BASE_GREEN_LIGHT
var COLOR_BASE_THEME_GREEN_SUB_FONT =COLOR_BASE_GREY_BLACK
var COLOR_BASE_THEME_GREEN_HIGHTLIGHT =COLOR_BASE_GREEN_HIGHTLIGHT







var COLOR_BASE_THEME_MAIN =COLOR_BASE_THEME_GREEN_MAIN
var COLOR_BASE_THEME_MAIN_FONT =COLOR_BASE_THEME_GREEN_MAIN_FONT
var COLOR_BASE_THEME_SUB =COLOR_BASE_THEME_GREEN_SUB
var COLOR_BASE_THEME_SUB_FONT =COLOR_BASE_THEME_GREEN_SUB_FONT
var COLOR_BASE_THEME_HIGHTLIGHT =COLOR_BASE_THEME_GREEN_HIGHTLIGHT
var COLOR_BASE_THEME_HIGHTLIGHT_FONT = COLOR_BASE_THEME_GREEN_MAIN_FONT
var COLOR_BASE_THENE_LINE = COLOR_BASE_GREY_FOR_BACK

var COLOR_BASE_THEME_LOGO_FOR_LISTTABLE = COLOR_BASE_GREEN_GRAY


var COLOR_BASE_NAV_BLACK_HOVER = COLOR_BASE_WHITE
var COLOR_BASE_NAV_BLACK_SELECT = COLOR_BASE_BLUE
var COLOR_BASE_NAV_BLACK_ICON = COLOR_BASE_WHITE
var COLOR_BASE_NAV_BLACK_MOVE = COLOR_BASE_BLUE

var COLOR_BASE_NAV_WHITE_HOVER = COLOR_BASE_GREY_BLACK
var COLOR_BASE_NAV_WHITE_SELECT = COLOR_BASE_GREY_BLACK
var COLOR_BASE_NAV_WHITE_ICON = COLOR_BASE_GREY_BLACK
var COLOR_BASE_NAV_WHITE_MOVE = COLOR_BASE_GREY_BLACK


var COLOR_BASE_BODY_BACK = COLOR_BASE_GREY_FOR_BACK
var COLOR_BASE_BODY_BACK_FONT=COLOR_BASE_WHITE

var COLOR_BASE_HEADER_BACK =COLOR_BASE_GREY_FOR_HEAD
var COLOR_BASE_HEADER_BACK_FONT =COLOR_BASE_WHITE

var COLOR_BASE_BODY_CONTENT =COLOR_BASE_GREY_SLIVER
var COLOR_BASE_BODY_CONTENT_FONT = COLOR_BASE_GREY_BLACK

var COLOR_BASE_DIALOG_BACK =COLOR_BASE_GREY_SLIVER
var COLOR_BASE_DIALOG_BACK_FONT =COLOR_BASE_GREY_BLACK


var COLOR_BASE_LISTVIEW_FONT_HIGHLIGHTED = COLOR_BASE_THEME_MAIN_FONT
var COLOR_BASE_LISTVIEW_FONT = COLOR_BASE_BLACK


var COLOR_PLAYER_PLAYBAR_BACKGROUND = "#373737"
var COLOR_PLAYER_PLAYBAR_FOREGROUND = "#555555"
var COLOR_PLAYER_PLAYBAR_THUMB = "#FFC400"
var COLOR_PLAYER_Buttom_BACKGROUND = "#444444"
var COLOR_PLAYER_BUTTOM_HOVERCOLOR = "#FFC400"
var COLOR_PLAYER_CONTROL_BACKGOURD ="#EBEBEB"


var COLOR_FOREGROUND = COLOR_BASE_GREY_BLACK; // Text color

var COLOR_LIGHT = "#191919"
var COLOR_HIGHTLIGHTED = COLOR_BASE_WHITE
var COLOR_MID = COLOR_BASE_GREY_FOR_HEAD
var COLOR_TEXT_SELECTION =COLOR_BASE_BLUE
var COLOR_DISABLED = COLOR_BASE_GREY_DISABLE

// ConfigGroupTitleBar

var CONFIGBAR_COLOR_BACK = COLOR_BASE_BODY_BACK
var CONIFIGBAR_COLOR_ACTIVE = CONFIGBAR_COLOR_BACK


var TOOLBAR_COLOR_BACKGROUD=COLOR_BASE_THEME_SUB
var TOOLBAR_COLOR_FOREGROUD="#CCA300"
var TOOLBAR_COLOR_BORDER =CONFIGBAR_COLOR_BACK
var TOOLBAR_SIZE_HEIGHT =34
var TOOLBAR_SIZE_BORDER_WIDTH=1
var TOOLBAR_SIZE_ITEM_SPACE=10
var TOOLBAR_SIZE_PADDING_PARENT = 8



var SIZE_PADDINGXSMALL =2
var SIZE_PADDINGSMALL = 4
var SIZE_PADDINGMEDIUM = 6
var SIZE_PADDINGXMEDIUM = 8
var SIZE_PADDINGLARGE =12
var SIZE_PADDINGXLARGE =16
var SIZE_PADDINGXXLARGE =20
var SIZE_PADDINGXXXLARGE =30




var SIZE_GRAPHIC_TINY =SIZE_ICON_24
var SIZE_GRAPHIC_SMALL = SIZE_ICON_32
var SIZE_GRAPHIC_MEDIUM = SIZE_ICON_48
var SIZE_GRAPHIC_LARGE = SIZE_ICON_72



var SIZE_THUMBNAIL = 150

var SIZE_HEADER_HEIGHT =65

var COLOR_MAINPAGE_FOREGROUND  = COLOR_BASE_WHITE //text color
var COLOR_MAINPAGE_BACKGROUND  = COLOR_BASE_BLACK //back color

var COLOR_SUMMARY_HEADER_BACKGROUND = color_theme_primary_back
var COLOR_SUMMARY_HEADER_FOREGROUND = color_theme_primary_fore

var COLOR_SUMMARY_BODY_BACKGROUND = color_gray_lighter
var COLOR_SUMMARY_BODY_FOREGROUND = color_gray_darker

var COLOR_SUMMARY_FOOTER_BACKGROUND = color_theme_sub_back
var COLOR_SUMMARY_FOOTER_FOREGROUND = color_theme_sub_fore


var SIZE_SUMMARY_ITEM_LEFT_PADDING = 110
var SIZE_SUMMARY_ITEM_TOP_PADDING =58
var SIZE_SUMMARY_RADIUS = 4
var SIZE_SUMMARY_SETTING_TOPMARGIN = 60


//ListMenu  id_menu_xx

var LISTMENU_BG = COLOR_BASE_GREY_WIN_BG
var LISTMENU_ITEM_HEIGHT = 48
var LISTMENU_ITEM_BG = COLOR_BASE_TRANSPARENT
var LISTMENU_ITEM_BG_HOVER = COLOR_BASE_GREY_WIN_HOVER
var LISTMENU_ITEM_BG_PRESS = COLOR_BASE_GREY_WIN_PRESS
var LISTMENU_ITEM_BG_SELECT = COLOR_BASE_YELLOW
var LISTMENU_ITEM_FONT_SIZE = font_size_h4
//模板新建界面表格
var SIZE_TEMPLATE_ADD_FIRST_WIDTH = 50 //zbb
var SIZE_TEMPLATE_ADD_TWO_WIDTH = 28 //zbb


var COLOR_LOGINPAGE_BACKGROUND            = COLOR_BASE_GREY_BLACK //background
var COLOR_LOGINPAGE_FOREGROUND            = COLOR_BASE_WHITE //text color


// 临时性对话框

var DIALOG_SIZE_WIDTH = 1000
var DIALOG_SIZE_HEIGHT =700

var DIALOG_SIZE_RADIUS =6
var DIALOG_COLOR_BACKGROUND = COLOR_BASE_DIALOG_BACK
var DIALOG_COLOR_FOREGROUND = COLOR_BASE_DIALOG_BACK_FONT
var COLOR_DIALOG_BACKGROUND =  DIALOG_COLOR_BACKGROUND //grey
var COLOR_DIALOG_FOREGROUND = DIALOG_COLOR_FOREGROUND //black

var COLOR_DIALOG_HEADER_BACKGROUD = COLOR_BASE_GREY_BLACK
var COLOR_DIALOG_HEADER_FOREGROUD = COLOR_BASE_WHITE
var COLOR_DIALOG_HEADER_LOADBAR_BACKGROUD_DISABLE = COLOR_BASE_GREY_BLACK
var COLOR_DIALOG_HEADER_LOADBAR_BACKGROUD_ACTIVE = COLOR_BASE_WHITE
var COLOR_DIALOG_HEADER_LOADBAR_FOREGROUND = COLOR_BASE_THEME_HIGHTLIGHT

var COLOR_TEMPLATE_BACKGROUND = COLOR_BASE_GREY_BLACK //zbb
var COLOR_TEMPLATE_FONT_YELLOW = COLOR_BASE_YELLOW //zbb
var COLOR_TEMPLATE_FONT_BLUE = COLOR_BASE_BLUE //zbb

var COLOR_VIDEO_SETTING_BACKGROUND = COLOR_BASE_THEME_GREEN_SUB //zbb
var COLOR_LISTVIEW_BACKGROUND =COLOR_BASE_GREY_SLIVER


// setting the custom button colors
var COLOR_BUTTON_SHADOW =COLOR_BASE_BLACK
var COLOR_BUTTON_MASK =COLOR_BASE_WHITE
var COLOR_BUTTON_DISABLE_MASK =  COLOR_BASE_GREEN_GRAY //COLOR_BASE_GREY_BLACK
var COLOR_BUTTON_HOVER_MASK =COLOR_BASE_WHITE

var COLOR_BUTTON_BACKGROUND            = COLOR_BASE_GREY_FOR_HEAD //background
var COLOR_BUTTON_FOREGROUND            = COLOR_BASE_WHITE //text color


var COLOR_BUTTON_OK_BACKGROUND            = COLOR_BASE_THEME_HIGHTLIGHT
var COLOR_BUTTON_OK_FOREGROUND            = COLOR_BASE_THEME_HIGHTLIGHT_FONT


var COLOR_BUTTON_CANCEL_BACKGROUND            = COLOR_BASE_GREY_FOR_BACK //background
var COLOR_BUTTON_CANCEL_FOREGROUND            = COLOR_BASE_WHITE //text color



//Alarm page
var SIZE_ALARM_DETAIL_WIDTH = 340


var CORNER_MARGINS = 22;

var MARGIN_DEFAULT = 0;
var MARGIN_XLARGE = 16;

// Distance in pixels from the widget bounding box inside which a release
// event would still be accepted and trigger the widget
var RELEASE_MISS_DELTA = 30;

var OPACITY_ENABLED = 1.0;
var OPACITY_DISABLED = 0.5;
var SIZE_BUTTON = 64;

var PADDING_XSMALL  = 2;
var PADDING_SMALL   = 4;
var PADDING_MEDIUM  = 6;
var PADDING_LARGE   = 8;
var PADDING_DOUBLE  = 12;
var PADDING_XLARGE  = 16;
var PADDING_XXLARGE = 24;
var PADDING_DIALOGCONTENT= 40;
var PADDING_TITLE_CONTENT=36;

var SCROLLDECORATOR_SHORT_MARGIN = 8;
var SCROLLDECORATOR_LONG_MARGIN = 4;

var TOUCH_EXPANSION_MARGIN = -12;

var BUTTON_WIDTH = 322;
var BUTTON_HEIGHT = 51;
var BUTTON_LABEL_MARGIN = 10;

var FIELD_DEFAULT_HEIGHT = 52;

//Common UI layouts
var DEFAULT_MARGIN = 16;
var BUTTON_SPACING = 6;
var HEADER_DEFAULT_HEIGHT_PORTRAIT = 72;
var HEADER_DEFAULT_HEIGHT_LANDSCAPE = 46;
var HEADER_DEFAULT_TOP_SPACING_PORTRAIT = 20;
var HEADER_DEFAULT_BOTTOM_SPACING_PORTRAIT = 20;
var HEADER_DEFAULT_TOP_SPACING_LANDSCAPE = 16;
var HEADER_DEFAULT_BOTTOM_SPACING_LANDSCAPE = 14;
var LIST_ITEM_HEIGHT_SMALL = 64;
var LIST_ITEM_HEIGHT_DEFAULT = 80;

//TABLEVIEW style
var TABLEVIEW_COLOR_HEADER_BACKGROUND = COLOR_BASE_HEADER_BACK
var TABLEVIEW_COLOR_HEADER_BACKGROUND_HOVER = COLOR_BASE_GREY_SLIVER
var TABLEVIEW_COLOR_HEADER_FOREGROUND = COLOR_BASE_HEADER_BACK_FONT

var TABLEVIEW_COLOR_ROW_BACKGROUND = COLOR_BASE_TRANSPARENT
var TABLEVIEW_COLOR_ROW_BACKGROUND_ALTERNATE = COLOR_BASE_GREY_SLIVER
var TABLEVIEW_COLOR_ROW_SELECTED_BACKGROUND = COLOR_BASE_THEME_HIGHTLIGHT



var TABLEVIEW_SIZE_HEADER_HEIGHT = 30
var TABLEVIEW_SIZE_ROW_HEIGHT = 31
var TABLEVIEW_SIZE_TEXT_LEFTMAEGIN =10
var TABLEVIEW_SIZE_CHECKBOX_WIDTH = 48

//NavButton
var NavButton_COLOR_SELECTED = COLOR_BASE_THEME_MAIN
var NavButton_COLOR_NORMAL =COLOR_BASE_TRANSPARENT
var NavButton_COLOR_HOVER =COLOR_BASE_THEME_HIGHTLIGHT
var NavButton_COLOR_LABEL_NORMAL = COLOR_BASE_GREY_BLACK
var NavButton_COLOR_LABEL_SELECTED = COLOR_BASE_WHITE
var NavButton_SIZE_HEIGHT = 45


var TYPE_ALARM_LIST_ALL="all"
var TYPE_ALARM_LIST_UNPROCESS="unprocess"
var TYPE_ALARM_LIST_PROCESSED="processed"
var TYPE_ALARM_LIST_STAR="star"
var TYPE_ALARM_LIST_DELETE="delete"




var SIZE_ICON_DEFAULT = 32;
var SIZE_ICON_LARGE = 48;
var SIZE_ICON_16 =16
var SIZE_ICON_20 =20
var SIZE_ICON_22 =22
var SIZE_ICON_24 =24
var SIZE_ICON_26 =26
var SIZE_ICON_28 =28
var SIZE_ICON_32 =32
var SIZE_ICON_48 =48
var SIZE_ICON_64 =64
var SIZE_ICON_72 =72
var SIZE_ICON_128 =128
var SIZE_ICON_256 =256
var SIZE_ICON_512 =512

var SIZE_ICON_LOGO_SUB = 48
var SIZE_ICON_LOGO_MAIN = 64

var SIZE_ICON_NAV_SUB = 64
var SIZE_ICON_NAV_MAIN = 72

var SIZE_ICON_TOOLBAR_WITH_TEXT=SIZE_ICON_16
var SIZE_ICON_TOOLBAR =SIZE_ICON_20

var FONT_ICON_BODY =SIZE_ICON_24
var FONT_ICON_TOOL = SIZE_ICON_22



// icon
//var ICON_ALARM= "\u0021";
//var ICON_ALARM_DELETE= "\u0022";
//var ICON_ALARM_HANDLE= "\u0023";
//var ICON_ALARM_RECOVER= "\u0024";
//var ICON_ALARM_STAR= "\u0025";
//var ICON_ALARM_UNHANDLE= "\u0026";
//var ICON_ALARM_UNSTAR= "\u0027";
//var ICON_ALG_CAR= "\u0028";
//var ICON_ALG_CPC= "\u0029";
//var ICON_ALG_FACE= "\u002a";
//var ICON_ALG_PEA= "\u002b";
//var ICON_ALG_PROTECT= "\u002c";
//var ICON_ALG_RING= "\u002d";
//var ICON_ALG_SPY= "\u002e";
//var ICON_DEVICE_CAMERA= "\u002f";
//var ICON_DEVICE_INFRARED= "\u0030";
//var ICON_DEVICE_RABOT= "\u0031";
//var ICON_DEVICE_RECORDER= "\u0032";
//var ICON_DEVICE_RING= "\u0033";
//var ICON_TOPO_EDIT= "\u0034";
//var ICON_TOPO_NODE_EDIT= "\u0035";
//var ICON_TOPO_SAVE= "\u0036";
//var ICON_DRAW_CANVAS= "\u0037";
//var ICON_DRAW_CLEAR= "\u0038";
//var ICON_DRAW_CROP= "\u0039";
//var ICON_DRAW_ENHANCE= "\u003a";
//var ICON_DRAW_LINE= "\u003b";
//var ICON_DRAW_MODIFY= "\u003c";
//var ICON_DRAW_PLAYER= "\u003d";
//var ICON_DRAW_RECT= "\u003e";
//var ICON_DRAW_REDO= "\u003f";
//var ICON_DRAW_UNDO= "\u0040";
//var ICON_DRAW_ZOOM= "\u0041";
//var ICON_CAMERA_ADD= "\u0042";
//var ICON_CAMERA_CLOSE= "\u0043";
//var ICON_CAMERA_FULLSCREEM= "\u0044";
//var ICON_CAMERA_HAND_RECORD= "\u0045";
//var ICON_CAMERA_IPC1= "\u0046";
//var ICON_CAMERA_IPC4= "\u0047";
//var ICON_CAMERA_IPC9= "\u0048";
//var ICON_CAMERA_IPC13= "\u0049";
//var ICON_CAMERA_IPC15= "\u004a";
//var ICON_CAMERA_NEWIPC= "\u004b";
//var ICON_CAMERA_PAUSE= "\u004c";
//var ICON_CAMERA_PLAY= "\u004d";
//var ICON_CAMERA_RECORD= "\u004e";
//var ICON_CAMERA_REVIEW= "\u004f";
//var ICON_CAMERA_SETTING= "\u0050";
//var ICON_CAMERA_SNAP= "\u0051";
//var ICON_CAMERA_UNRECORD= "\u0052";
//var ICON_CAMERA_UNWATCH= "\u0053";
//var ICON_CAMERA_WATCH= "\u0054";
//var ICON_PLAYER_FORWARD= "\u0055";
//var ICON_PLAYER_PAUSE= "\u0056";
//var ICON_PLAYER_PLAY= "\u0057";
//var ICON_PLAYER_REWIND= "\u0058";
//var ICON_PLAYER_STOP= "\u0059";
//var ICON_NAV_ALARM= "\u005a";
//var ICON_NAV_ALG= "\u005b";
//var ICON_NAV_CAMERA= "\u005c";
//var ICON_NAV_HOME= "\u005d";
//var ICON_NAV_LOG= "\u005e";
//var ICON_NAV_MAIN= "\u005f";
//var ICON_NAV_MORE= "\u0060";
//var ICON_NAV_RECORD= "\u0061";
//var ICON_NAV_SETTING= "\u0062";
//var ICON_NAV_SYSTEM= "\u0063";
//var ICON_NAV_TEMPLATE= "\u00e8";
//var ICON_NAV_TOPO= "\u0064";
//var ICON_NAV_USER= "\u0065";
//var ICON_ACTION_ADD= "\u0066";
//var ICON_ACTION_CHECK= "\u0067";
//var ICON_ACTION_CHECKUN= "\u0068";
//var ICON_ACTION_CLOSE= "\u0069";
//var ICON_ACTION_DELETE= "\u006a";
//var ICON_ACTION_DETAIL= "\u006b";
//var ICON_ACTION_ENTER= "\u006c";
//var ICON_ACTION_EXIT= "\u006d";
//var ICON_ACTION_HANDLE= "\u006e";
//var ICON_ACTION_REDO= "\u006f";
//var ICON_ACTION_REFRESH= "\u0070";
//var ICON_ACTION_RIGHT= "\u0071";
//var ICON_ACTION_SAVE= "\u0072";
//var ICON_ACTION_SEARCH= "\u0073";
//var ICON_ACTION_SORT= "\u0074";
//var ICON_ACTION_SPY= "\u0075";
//var ICON_ACTION_STARED= "\u0076";
//var ICON_ACTION_TOFIRST= "\u0077";
//var ICON_ACTION_TOLAST= "\u0078";
//var ICON_ACTION_TONEXT= "\u0079";
//var ICON_ACTION_TOPREW= "\u007a";
//var ICON_ACTION_UNDO= "\u007b";
//var ICON_ACTION_WORNG= "\u007c";
//var ICON_BASE_ALARM= "\u007d";
//var ICON_BASE_CHART= "\u007e";
//var ICON_BASE_INFO= "\u007f";
//var ICON_BASE_LIST= "\u0080";
//var ICON_BASE_MEDIA= "\u0081";
//var ICON_BASE_MOVIE= "\u0082";
//var ICON_BASE_PEOPLE= "\u0083";
//var ICON_BASE_SETTING= "\u0084";
//var ICON_BASE_TEMPLATE= "\u0085";
//var ICON_BASE_THUMB= "\u0086";
//var ICON_BASE_USER= "\u0087";
//var ICON_BASE_VIDEO= "\u0088";
//var ICON_BASE_VIDEOCAM= "\u0089";
//var ICON_BASE_VIDEOS= "\u008a";


//2015-10-18
//var ICON_LOGO_ALARMCLOCK = "\u0021";
//var ICON_LOGO_ALARMLIGHT = "\u0022";
//var ICON_LOGO_ALARMVOICE = "\u0023";
//var ICON_LOGO_ALG = "\u0024";
//var ICON_LOGO_ANALYSIS = "\u0025";
//var ICON_LOGO_ANCHOR = "\u0026";
//var ICON_LOGO_ATTACHMENTS = "\u0027";
//var ICON_LOGO_BARGRAPH = "\u0028";
//var ICON_LOGO_BUSINESS = "\u0029";
//var ICON_LOGO_CALENDER = "\u002a";
//var ICON_LOGO_CAMERA = "\u002b";
//var ICON_LOGO_CLOCK = "\u002c";
//var ICON_LOGO_CLOUD = "\u002d";
//var ICON_LOGO_COMPASS = "\u002e";
//var ICON_LOGO_DESKTOP = "\u002f";
//var ICON_LOGO_DIA = "\u0030";
//var ICON_LOGO_DISTANCE = "\u0031";
//var ICON_LOGO_DOCUMENT = "\u0032";
//var ICON_LOGO_DOCUMENTS = "\u0033";
//var ICON_LOGO_DOWNLOAD = "\u0034";
//var ICON_LOGO_DRAW = "\u0035";
//var ICON_LOGO_EMAIL = "\u0036";
//var ICON_LOGO_EXPAND = "\u0037";
//var ICON_LOGO_FLAG = "\u0038";
//var ICON_LOGO_FOCUS = "\u0039";
//var ICON_LOGO_GRID = "\u003a";
//var ICON_LOGO_HEART = "\u003b";
//var ICON_LOGO_KEY = "\u003c";
//var ICON_LOGO_LAPTOP = "\u003d";
//var ICON_LOGO_LAYERS = "\u003e";
//var ICON_LOGO_LINEGRAPH = "\u003f";
//var ICON_LOGO_LOCATION = "\u0040";
//var ICON_LOGO_LOCK = "\u0041";
//var ICON_LOGO_LOG = "\u0042";
//var ICON_LOGO_MAIN = "\u0043";
//var ICON_LOGO_MAN = "\u0044";
//var ICON_LOGO_MAP = "\u0045";
//var ICON_LOGO_MESSAGE = "\u0046";
//var ICON_LOGO_MIC = "\u0047";
//var ICON_LOGO_MOBILE = "\u0048";
//var ICON_LOGO_NAVGATION = "\u0049";
//var ICON_LOGO_NETWORK = "\u004a";
//var ICON_LOGO_PICTURE = "\u004b";
//var ICON_LOGO_PICTURES = "\u004c";
//var ICON_LOGO_PIECHART = "\u004d";
//var ICON_LOGO_PINE = "\u004e";
//var ICON_LOGO_PROTECT = "\u004f";
//var ICON_LOGO_RECYCLE = "\u0050";
//var ICON_LOGO_REFRESH = "\u0051";
//var ICON_LOGO_SEARCH = "\u0052";
//var ICON_LOGO_SEARCHFILE = "\u0053";
//var ICON_LOGO_SETTING = "\u0054";
//var ICON_LOGO_SETTINGS = "\u0055";
//var ICON_LOGO_SNAP = "\u0056";
//var ICON_LOGO_TAGS = "\u0057";
//var ICON_LOGO_TASK = "\u0058";
//var ICON_LOGO_TOOLS = "\u0059";
//var ICON_LOGO_TRANSPORT = "\u005a";
//var ICON_LOGO_UPLOAD = "\u005b";
//var ICON_LOGO_VIDEO = "\u005c";
//var ICON_LOGO_WALLET = "\u005d";
//var ICON_LOGO_WARING = "\u005e";
//var ICON_LOGO_WOMEN = "\u005f";
//var ICON_SPINNER_01 = "\u0060";
//var ICON_SPINNER_012 = "\u0061";
//var ICON_SPINNER_03 = "\u0062";
//var ICON_SPINNER_04 = "\u0063";
//var ICON_SPINNER_05 = "\u0064";
//var ICON_SPINNER_06 = "\u0065";
//var ICON_SPINNER_07 = "\u0066";
//var ICON_SPINNER_08 = "\u0067";
//var ICON_SPINNER_09 = "\u0068";
//var ICON_SPINNER_10 = "\u0069";
//var ICON_SPINNER_11 = "\u006a";
//var ICON_SPINNER_12 = "\u006b";
//var ICON_ALARM = "\u006c";
//var ICON_ALARM_DELETE = "\u006d";
//var ICON_ALARM_HANDLE = "\u006e";
//var ICON_ALARM_RECOVER = "\u006f";
//var ICON_ALARM_STAR = "\u0070";
//var ICON_ALARM_UNHANDLE = "\u0071";
//var ICON_ALARM_UNSTAR = "\u0072";
//var ICON_ALG_CAR = "\u0073";
//var ICON_ALG_CPC = "\u0074";
//var ICON_ALG_FACE = "\u0075";
//var ICON_ALG_PEA = "\u0076";
//var ICON_ALG_PROTECT = "\u0077";
//var ICON_ALG_RING = "\u0078";
//var ICON_ALG_SPY = "\u0079";
//var ICON_DEVICE_CAMERA = "\u007a";
//var ICON_DEVICE_INFRARED = "\u007b";
//var ICON_DEVICE_RABOT = "\u007c";
//var ICON_DEVICE_RECORDER = "\u007d";
//var ICON_DEVICE_RING = "\u007e";
//var ICON_TOPO_EDIT = "\u007f";
//var ICON_TOPO_NODE_EDIT = "\u0080";
//var ICON_TOPO_SAVE = "\u0081";
//var ICON_DRAW_STACK = "\u0082";
//var ICON_DRAW_CANVAS = "\u0083";
//var ICON_DRAW_CLEAR = "\u0084";
//var ICON_DRAW_CROP = "\u0085";
//var ICON_DRAW_ENHANCE = "\u0086";
//var ICON_DRAW_LINE = "\u0087";
//var ICON_DRAW_MODIFY = "\u0088";
//var ICON_DRAW_PLAYER = "\u0089";
//var ICON_DRAW_RECT = "\u008a";
//var ICON_DRAW_REDO = "\u008b";
//var ICON_DRAW_UNDO = "\u008c";
//var ICON_DRAW_ZOOM = "\u008d";
//var ICON_CAMERA_ADD = "\u008e";
//var ICON_CAMERA_CLOSE = "\u008f";
//var ICON_CAMERA_FULLSCREEM = "\u0090";
//var ICON_CAMERA_HAND_RECORD = "\u0091";
//var ICON_CAMERA_IPC1 = "\u0092";
//var ICON_CAMERA_IPC4 = "\u0093";
//var ICON_CAMERA_IPC9 = "\u0094";
//var ICON_CAMERA_IPC13 = "\u0095";
//var ICON_CAMERA_IPC15 = "\u0096";
//var ICON_CAMERA_NEWIPC = "\u0097";
//var ICON_CAMERA_PAUSE = "\u0098";
//var ICON_CAMERA_PLAY = "\u0099";
//var ICON_CAMERA_RECORD = "\u009a";
//var ICON_CAMERA_REVIEW = "\u009b";
//var ICON_CAMERA_SETTING = "\u009c";
//var ICON_CAMERA_SNAP = "\u009d";
//var ICON_CAMERA_UNRECORD = "\u009e";
//var ICON_CAMERA_UNWATCH = "\u009f";
//var ICON_CAMERA_WATCH = "\u00a0";
//var ICON_PLAYER_RECORD = "\u00a1";
//var ICON_PLAYER_FORWARD = "\u00a2";
//var ICON_PLAYER_PAUSE = "\u00a3";
//var ICON_PLAYER_PLAY = "\u00a4";
//var ICON_PLAYER_REWIND = "\u00a5";
//var ICON_PLAYER_STOP = "\u00a6";
//var ICON_NAV_ALARM = "\u00a7";
//var ICON_NAV_ALG = "\u00a8";
//var ICON_NAV_CAMERA = "\u00a9";
//var ICON_NAV_HOME = "\u00aa";
//var ICON_NAV_LOG = "\u00ab";
//var ICON_NAV_MAIN = "\u00ac";
//var ICON_NAV_MORE = "\u00ad";
//var ICON_NAV_RECORD = "\u00ae";
//var ICON_NAV_SETTING = "\u00af";
//var ICON_NAV_SYSTEM = "\u00b0";
//var ICON_NAV_TEMPLATE = "\u00b1";
//var ICON_NAV_TOPO = "\u00b2";
//var ICON_NAV_USER = "\u00b3";
//var ICON_ACTION_SORT = "\u00b4";
//var ICON_ACTION_ADD = "\u00b5";
//var ICON_ACTION_CHECK = "\u00b6";
//var ICON_ACTION_CHECKUN = "\u00b7";
//var ICON_ACTION_CLOSE = "\u00b8";
//var ICON_ACTION_DELETE = "\u00b9";
//var ICON_ACTION_DETAIL = "\u00ba";
//var ICON_ACTION_ENTER = "\u00bb";
//var ICON_ACTION_EXIT = "\u00bc";
//var ICON_ACTION_HANDLE = "\u00bd";
//var ICON_ACTION_REDO = "\u00be";
//var ICON_ACTION_REFRESH = "\u00bf";
//var ICON_ACTION_RIGHT = "\u00c0";
//var ICON_ACTION_SAVE = "\u00c1";
//var ICON_ACTION_SEARCH = "\u00c2";
//var ICON_ACTION_SORTNUM = "\u00c3";
//var ICON_ACTION_SPY = "\u00c4";
//var ICON_ACTION_STARED = "\u00c5";
//var ICON_ACTION_TOFIRST = "\u00c6";
//var ICON_ACTION_TOLAST = "\u00c7";
//var ICON_ACTION_TONEXT = "\u00c8";
//var ICON_ACTION_TOPREW = "\u00c9";
//var ICON_ACTION_UNDO = "\u00ca";
//var ICON_ACTION_WORNG = "\u00cb";
//var ICON_BASE_DATE = "\u00cc";
//var ICON_BASE_HEADPHONE = "\u00cd";
//var ICON_BASE_HOME = "\u00ce";
//var ICON_BASE_IMAGE = "\u00cf";
//var ICON_BASE_ALARM = "\u00d0";
//var ICON_BASE_CHART = "\u00d1";
//var ICON_BASE_INFO = "\u00d2";
//var ICON_BASE_LIST = "\u00d3";
//var ICON_BASE_MEDIA = "\u00d4";
//var ICON_BASE_MOVIE = "\u00d5";
//var ICON_BASE_PEOPLE = "\u00d6";
//var ICON_BASE_SETTING = "\u00d7";
//var ICON_BASE_TEMPLATE = "\u00d8";
//var ICON_BASE_THUMB = "\u00d9";
//var ICON_BASE_USER = "\u00da";
//var ICON_BASE_VIDEO = "\u00db";
//var ICON_BASE_VIDEOCAM = "\u00dc";
//var ICON_BASE_VIDEOS = "\u00dd";


var ICON_LOGO_ALARMCLOCK = "\u0021";
var ICON_LOGO_ALARMLIGHT = "\u0022";
var ICON_LOGO_ALARMVOICE = "\u0023";
var ICON_LOGO_ALG = "\u0024";
var ICON_LOGO_ANALYSIS = "\u0025";
var ICON_LOGO_ANCHOR = "\u0026";
var ICON_LOGO_ATTACHMENTS = "\u0027";
var ICON_LOGO_BARGRAPH = "\u0028";
var ICON_LOGO_BUSINESS = "\u0029";
var ICON_LOGO_CALENDER = "\u002a";
var ICON_LOGO_CAMERA = "\u002b";
var ICON_LOGO_CLOCK = "\u002c";
var ICON_LOGO_CLOUD = "\u002d";
var ICON_LOGO_COMPASS = "\u002e";
var ICON_LOGO_DESKTOP = "\u002f";
var ICON_LOGO_DIA = "\u0030";
var ICON_LOGO_DISTANCE = "\u0031";
var ICON_LOGO_DOCUMENT = "\u0032";
var ICON_LOGO_DOCUMENTS = "\u0033";
var ICON_LOGO_DOWNLOAD = "\u0034";
var ICON_LOGO_DRAW = "\u0035";
var ICON_LOGO_EMAIL = "\u0036";
var ICON_LOGO_EXPAND = "\u0037";
var ICON_LOGO_FLAG = "\u0038";
var ICON_LOGO_FOCUS = "\u0039";
var ICON_LOGO_GRID = "\u003a";
var ICON_LOGO_HEART = "\u003b";
var ICON_LOGO_KEY = "\u003c";
var ICON_LOGO_LAPTOP = "\u003d";
var ICON_LOGO_LAYERS = "\u003e";
var ICON_LOGO_LINEGRAPH = "\u003f";
var ICON_LOGO_LOCATION = "\u0040";
var ICON_LOGO_LOCK = "\u0041";
var ICON_LOGO_LOG = "\u0042";
var ICON_LOGO_MAIN = "\u0043";
var ICON_LOGO_MAN = "\u0044";
var ICON_LOGO_MAP = "\u0045";
var ICON_LOGO_MESSAGE = "\u0046";
var ICON_LOGO_MIC = "\u0047";
var ICON_LOGO_MOBILE = "\u0048";
var ICON_LOGO_NAVGATION = "\u0049";
var ICON_LOGO_NETWORK = "\u004a";
var ICON_LOGO_PICTURE = "\u004b";
var ICON_LOGO_PICTURES = "\u004c";
var ICON_LOGO_PIECHART = "\u004d";
var ICON_LOGO_PINE = "\u004e";
var ICON_LOGO_PROTECT = "\u004f";
var ICON_LOGO_RECYCLE = "\u0050";
var ICON_LOGO_REFRESH = "\u0051";
var ICON_LOGO_SEARCH = "\u0052";
var ICON_LOGO_SEARCHFILE = "\u0053";
var ICON_LOGO_SETTING = "\u0054";
var ICON_LOGO_SETTINGS = "\u0055";
var ICON_LOGO_SNAP = "\u0056";
var ICON_LOGO_TAGS = "\u0057";
var ICON_LOGO_TASK = "\u0058";
var ICON_LOGO_TOOLS = "\u0059";
var ICON_LOGO_TRANSPORT = "\u005a";
var ICON_LOGO_UPLOAD = "\u005b";
var ICON_LOGO_VIDEO = "\u005c";
var ICON_LOGO_WALLET = "\u005d";
var ICON_LOGO_WARING = "\u005e";
var ICON_LOGO_WOMEN = "\u005f";
var ICON_SPINNER_01 = "\u0060";
var ICON_SPINNER_012 = "\u0061";
var ICON_SPINNER_03 = "\u0062";
var ICON_SPINNER_04 = "\u0063";
var ICON_SPINNER_05 = "\u0064";
var ICON_SPINNER_06 = "\u0065";
var ICON_SPINNER_07 = "\u0066";
var ICON_SPINNER_08 = "\u0067";
var ICON_SPINNER_09 = "\u0068";
var ICON_SPINNER_10 = "\u0069";
var ICON_SPINNER_11 = "\u006a";
var ICON_SPINNER_12 = "\u006b";
var ICON_ALARM = "\u006c";
var ICON_ALARM_DELETE = "\u006d";
var ICON_ALARM_HANDLE = "\u006e";
var ICON_ALARM_RECOVER = "\u006f";
var ICON_ALARM_STAR = "\u0070";
var ICON_ALARM_UNHANDLE = "\u0071";
var ICON_ALARM_UNSTAR = "\u0072";
var ICON_ALG_CAR = "\u0073";
var ICON_ALG_CPC = "\u0074";
var ICON_ALG_FACE = "\u0075";
var ICON_ALG_PEA = "\u0076";
var ICON_ALG_PROTECT = "\u0077";
var ICON_ALG_RING = "\u0078";
var ICON_ALG_SPY = "\u0079";
var ICON_CAMERA_CAMACTIVE = "\u007a";
var ICON_CAMERA_CAMCLOSE = "\u007b";
var ICON_CAMERA_ADD = "\u007c";
var ICON_CAMERA_FULLSCREEM = "\u007d";
var ICON_CAMERA_HAND_RECORD = "\u007e";
var ICON_CAMERA_IPC1 = "\u007f";
var ICON_CAMERA_IPC12 = "\u0080";
var ICON_CAMERA_IPC13 = "\u0081";
var ICON_CAMERA_IPC15 = "\u0082";
var ICON_CAMERA_IPC4 = "\u0083";
var ICON_CAMERA_IPC6 = "\u0084";
var ICON_CAMERA_IPC9 = "\u0085";
var ICON_CAMERA_NEWIPC = "\u0086";
var ICON_CAMERA_PAUSE = "\u0087";
var ICON_CAMERA_PLAY = "\u0088";
var ICON_CAMERA_RECORD = "\u0089";
var ICON_CAMERA_REVIEW = "\u008a";
var ICON_CAMERA_SETTING = "\u008b";
var ICON_CAMERA_SNAP = "\u008c";
var ICON_CAMERA_UNRECORD = "\u008d";
var ICON_CAMERA_UNWATCH = "\u008e";
var ICON_CAMERA_WATCH = "\u008f";
var ICON_NAV_ALARM = "\u0090";
var ICON_NAV_ALG = "\u0091";
var ICON_NAV_CAMERA = "\u0092";
var ICON_NAV_HOME = "\u0093";
var ICON_NAV_LOG = "\u0094";
var ICON_NAV_MAIN = "\u0095";
var ICON_NAV_MORE = "\u0096";
var ICON_NAV_RECORD = "\u0097";
var ICON_NAV_SETTING = "\u0098";
var ICON_NAV_SYSTEM = "\u0099";
var ICON_NAV_TEMPLATE = "\u009a";
var ICON_NAV_TOPO = "\u009b";
var ICON_NAV_USER = "\u009c";
var ICON_NAV_WEBCAM = "\u009d";
var ICON_ACTION_ADD = "\u009e";
var ICON_ACTION_CHECK = "\u009f";
var ICON_ACTION_CHECKUN = "\u00a0";
var ICON_ACTION_CLOSE = "\u00a1";
var ICON_ACTION_DELETE = "\u00a2";
var ICON_ACTION_DETAIL = "\u00a3";
var ICON_ACTION_ENTER = "\u00a4";
var ICON_ACTION_EXIT = "\u00a5";
var ICON_ACTION_HANDLE = "\u00a6";
var ICON_ACTION_REDO = "\u00a7";
var ICON_ACTION_REFRESH = "\u00a8";
var ICON_ACTION_RIGHT = "\u00a9";
var ICON_ACTION_SAVE = "\u00aa";
var ICON_ACTION_SEARCH = "\u00ab";
var ICON_ACTION_SORT = "\u00ac";
var ICON_ACTION_SORTNUM = "\u00ad";
var ICON_ACTION_SPY = "\u00ae";
var ICON_ACTION_STARED = "\u00af";
var ICON_ACTION_SUB = "\u00b0";
var ICON_ACTION_TOFIRST = "\u00b1";
var ICON_ACTION_TOLAST = "\u00b2";
var ICON_ACTION_TONEXT = "\u00b3";
var ICON_ACTION_TOPREW = "\u00b4";
var ICON_ACTION_UNDO = "\u00b5";
var ICON_ACTION_WORNG = "\u00b6";
var ICON_BASE_CARD = "\u00b7";
var ICON_BASE_CHARTPIE = "\u00b8";
var ICON_BASE_CHARTBAR = "\u00b9";
var ICON_BASE_MOVIE = "\u00ba";
var ICON_BASE_WEBCAM = "\u00bb";
var ICON_BASE_DATE = "\u00bc";
var ICON_BASE_HEADPHONE = "\u00bd";
var ICON_BASE_HOME = "\u00be";
var ICON_BASE_IMAGE = "\u00bf";
var ICON_BASE_ALARM = "\u00c0";
var ICON_BASE_CHART = "\u00c1";
var ICON_BASE_INFO = "\u00c2";
var ICON_BASE_LIST = "\u00c3";
var ICON_BASE_MEDIA = "\u00c4";
var ICON_BASE_PEOPLE = "\u00c5";
var ICON_BASE_SETTING = "\u00c6";
var ICON_BASE_TEMPLATE = "\u00c7";
var ICON_BASE_THUMB = "\u00c8";
var ICON_BASE_USER = "\u00c9";
var ICON_BASE_VIDEO = "\u00ca";
var ICON_BASE_VIDEOCAM = "\u00cb";
var ICON_BASE_VIDEOS = "\u00cc";
var ICON_DEVICE_CAMERA = "\u00cd";
var ICON_DEVICE_INFRARED = "\u00ce";
var ICON_DEVICE_RABOT = "\u00cf";
var ICON_DEVICE_RECORDER = "\u00d0";
var ICON_DEVICE_RING = "\u00d1";
var ICON_TOPO_EDIT = "\u00d2";
var ICON_TOPO_NODE_EDIT = "\u00d3";
var ICON_TOPO_SAVE = "\u00d4";
var ICON_DRAW_STACK = "\u00d5";
var ICON_DRAW_CANVAS = "\u00d6";
var ICON_DRAW_CLEAR = "\u00d7";
var ICON_DRAW_CROP = "\u00d8";
var ICON_DRAW_ENHANCE = "\u00d9";
var ICON_DRAW_LINE = "\u00da";
var ICON_DRAW_MODIFY = "\u00db";
var ICON_DRAW_PLAYER = "\u00dc";
var ICON_DRAW_RECT = "\u00dd";
var ICON_DRAW_REDO = "\u00de";
var ICON_DRAW_UNDO = "\u00df";
var ICON_DRAW_ZOOM = "\u00e0";
var ICON_PLAYER_RECORD = "\u00e1";
var ICON_PLAYER_FORWARD = "\u00e2";
var ICON_PLAYER_PAUSE = "\u00e3";
var ICON_PLAYER_PLAY = "\u00e4";
var ICON_PLAYER_REWIND = "\u00e5";
var ICON_PLAYER_STOP = "\u00e6";


// params alg
var alg_unkown_type =0
var alg_unkown_name =qsTr("ALG_UNKOWN")
var alg_unkown_iconurl ="qrc:/qml/images/alg/img_operation_AES.fw.png"
var alg_unkown_info =qsTr("ALG_UNKOWN_INFO")
var alg_unkown_icon = ICON_ALG_SPY

var alg_pea_type =1
var alg_pea_name =qsTr("ALG_PEA")
var alg_pea_iconurl ="qrc:/qml/images/alg/img_operation_AES.fw.png"
var alg_pea_info =qsTr("ALG_PEA_INFO")
var alg_pea_icon = ICON_ALG_PEA

var alg_cpc_type =2
var alg_cpc_name =qsTr("ALG_CPC")
var alg_cpc_iconurl ="qrc:/qml/images/alg/img_operation_ATS.fw.png"
var alg_cpc_info =qsTr("ALG_CPC_INFO")
var alg_cpc_icon = ICON_ALG_PROTECT

var alg_dvc_type =3
var alg_dvc_name =qsTr("ALG_DVC")
var alg_dvc_iconurl ="qrc:/qml/images/alg/img_operation_DVC.fw.png"
var alg_dvc_info =qsTr("ALG_DVC_INFO")
var alg_dvc_icon = ICON_ALG_SPY


var alg_pfc_type =4
var alg_pfc_name =qsTr("ALG_DVC")
var alg_pfc_iconurl ="qrc:/qml/images/alg/img_operation_DVC.fw.png"
var alg_pfc_info =qsTr("ALG_DVC_INFO")
var alg_pfc_icon = ICON_ALG_SPY



var url_logo = "qrc:/qml/images/logo/xms_logo.png"
var url_logo_main="qrc:/qml/images/logo/xms_logo_main.png"
var url_media_test ="/mnt/hgfs/XMS1.1/videos/video1.avi"
var url_image_test = "qrc:/qml/images/test/snap.png"
var url_backgroud_shadow = "qrc:/qml/images/common/shadow_body.png"

var url_media_ipc ="rtsp://192.168.1.241:554/0"






//for use



var color_app_mainbackgroud =COLOR_BASE_WHITE_LIGHT
var color_app_mainActivegroud ="#e9f1f6"
var color_app_mainforegroud = COLOR_BASE_WHITE_LIGHT

var color_app_mainborder ="#bed7e4"

var color_app_bt_normal = "#7197af"
var color_app_bt_hover = "#004257"
var color_app_bt_select = "#59b1f1"

var color_app_bt_user_normal = "#59b1f1"
var color_app_bt_user_hover = "#004257"
var color_app_bt_user_select = "#59b1f1"


var color_app_tap_normal = "#27658a"
var color_app_tap_hover = "#59b1f1"
var color_app_tap_select = "#59b1f1"

//tree view
var color_app_tree_item_normal = color_app_mainActivegroud
var color_app_tree_item_hover = "#D8E9F1"
var color_app_tree_item_select = "#BDDCEC"
var color_app_tree_item_title = "#3d3d3d"
var color_app_tree_item_playback = "#009CE4"

//user page
var color_user_page_back = "#fafbfd"
var color_user_gridView_item_back ="#d9e9f1"


//for app
var app_url_logo_min = "qrc:/image/src/qml/Images/Pages/TopBarCom/mf_logo.png"
var app_color_base_page = "#009CE4"

var app_scrollBar_width = 15



