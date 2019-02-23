<?php

function slideform_submit($post_id) {
    $post = $_POST;

    $data_json = filter_input(INPUT_POST, "data");

    if ($data_json) {
        $data = json_decode($data_json);

        $adminEmail = get_bloginfo("admin_email");

        $emailBody = "";
        foreach ($data as $key => $value) {
            $emailBody .= $key . "\n";
            $emailBody .= $value . "\n\n";
        }

        if (wp_mail($adminEmail, "Slide Form: New submission!", $emailBody)) {
            echo "OK";
        }
        else {
            echo "Couldn't send email.";
        }
    }
    wp_die();
}
add_action("wp_ajax_slideform_submit", "slideform_submit");
add_action("wp_ajax_nopriv_slideform_submit", "slideform_submit");