<?php
/*
Plugin Name:    Slide Form Blocks
Plugin URI:     http://go.lgk.io/wp-slide-form
Description:    WordPress plugin for a form with slides, which could be used e.g. for project request forms.
Version:        1.0.0
Author:         Lars G. Kliesing (LGK)
Author URI:     https://lgk.io
License:        MIT
License URI:    https://raw.githubusercontent.com/lgkonline/rate-and-comment/master/LICENSE
*/

defined("ABSPATH") || exit;

global $slide_form_default_settings;
$slide_form_default_settings = array(
    "slide_form_like_icon" => "👍",
    "slide_form_dislike_icon" => "👎",
    "slide_form_comment_content" => "💬 Comment via Twitter"
);


function slide_form_install() {
}
register_activation_hook(__FILE__, "slide_form_install");


function slide_form_register_settings() {
    global $slide_form_default_settings;

    // Custom CSS setting
    register_setting("discussion", "slide_form_styling", array(
        "type" => "string",
        "description" => "Custom styling for Rate And Comment."
    ));
    function slide_form_styling_settings_field_cb() {
        $setting = get_option("slide_form_styling");
        ?>
        <textarea name="slide_form_styling" style="width:100%" rows="7"><?php echo isset($setting) ? esc_attr($setting) : "" ?></textarea>
        <?php
    }
    add_settings_field("slide_form_styling_settings_field", "Custom CSS", "slide_form_styling_settings_field_cb", "discussion", "slide_form_settings_section");
}
add_action("admin_init", "slide_form_register_settings");

function slide_form_scripts() {
    $blockPath = "/dist/block.js";
    $stylePath = "/dist/block.css";

    wp_enqueue_script(
        "slide-form-block-js",
        plugins_url($blockPath, __FILE__),
        ["wp-i18n", "wp-edit-post", "wp-element", "wp-editor", "wp-components", "wp-data", "wp-plugins", "wp-edit-post", "wp-api"],
        filemtime(plugin_dir_path(__FILE__) . $blockPath)
    );

    wp_enqueue_style(
        "slide-form-block-css",
        plugins_url($stylePath, __FILE__),
        "",
        filemtime(plugin_dir_path(__FILE__) . $stylePath)
    );
}
add_action("enqueue_block_assets", "slide_form_scripts");


function slide_form_block_callback($attr) {
    extract( $attr );

    if (isset($title)) {
        return sprintf($title);
    }
}

if ( function_exists( "register_block_type" ) ) {
    // Hook server side rendering into render callback
    // register_block_type(
    //     "slide-form/block", [
    //         "render_callback" => "slide_form_block_callback",
    //         "attributes"	  => array(
    //             "title"	 => array(
    //                 "type" => "string",
    //             ),
    //             "layers" => array(
    //                 "type" => "array",
    //                 "query" => array(
    //                     "title" => array(
    //                         "type" => "string"
    //                     )
    //                 )
    //             )
    //         ),
    //     ]
    // );
}