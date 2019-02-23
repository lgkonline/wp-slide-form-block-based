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

// defined("ABSPATH") || exit;

require "ajax.php";


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


function slide_form_frontend_scripts() {

    $frontendPath = "/dist/frontend.js";
    wp_enqueue_script(
        "slide-form-frontend-js",
        plugins_url($frontendPath, __FILE__),
        "",
        filemtime(plugin_dir_path(__FILE__) . $frontendPath)
    );

    wp_localize_script("slide-form-frontend-js", "slideForm_obj", array(
        "ajax_url" => admin_url("admin-ajax.php")
    ));
}
add_action("wp_enqueue_scripts", "slide_form_frontend_scripts");


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