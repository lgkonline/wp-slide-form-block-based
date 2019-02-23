<?php

function slideform_submit($post_id) {
    $post = $_POST;

    $data_json = filter_input(INPUT_POST, "data");

    if ($data_json) {
        $data = json_decode($data_json);

        $adminEmail = get_bloginfo("admin_email");

        $emailBody = "";
        $fields = ["name", "email", "phone", "textarea"];

        foreach ($fields as $field) {
            $emailBody .= "<p><strong>" . ucwords($field) . "</strong><br>";

            if (array_key_exists($field, $_POST)) {
                $emailBody .= $_POST[$field];
            }
            else {
                $emailBody .= "<i>Not set</i>";
            }
            $emailBody .= "</p>";
        }

        $emailBody .= "<h3>Answers</h3>";
        foreach ($data as $key => $value) {
            $emailBody .= "<p><strong>" . $key . "</strong><br>";
            $emailBody .= $value . "</p>";
        }

        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

        if (wp_mail($adminEmail, "Slide Form: New submission!", $emailBody, $headers)) {
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