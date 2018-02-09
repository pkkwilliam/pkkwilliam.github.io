<?php

    $organize=$_REQUEST['organize'];
    $clear=$_REQUEST['clear'];
    $message=$_REQUEST['message'];

	$to = "pkkwilliam@yahoo.com.hk";
	$subject = "Resume Improval FROM MYSELF";
 	$body = "Score 1 - 5 higher the better\n
			Organize = $organize\n
			Clear = $clear\n
			Additional Message:\n
			$message";
 	if (mail($to, $subject, $body)) {
		echo("<center><p>Suggestion successfully sent!</p><p>I appreciate your help</p></center>");
	} else {
   		echo("<center><p>Suggestion delivery failed…</p></center>");
	}
?>
						