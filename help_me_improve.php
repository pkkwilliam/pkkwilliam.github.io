<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Resume Improval</title>
</head>

<body>
<center>
   <form  action="improve_form_run.php" method="POST" enctype="multipart/form-data">
    <input type="hidden" name="action" value="submit">
	<p style="font-weight: bold">Is It Organize?</p>
	<label>&lt;Bad---Good&gt;</label><br/>
	<label>1<input type="radio" name="organize" value="1"/></label>
	<label>2<input type="radio" name="organize" value="2"/></label>
	<label>3<input type="radio" name="organize" value="3"/></label>
	<label>4<input type="radio" name="organize" value="4"/></label>
	<label>5<input type="radio" name="organize" value="5"/></label>
	<br/>
    <p style="font-weight: bold">Is It Clear?</p>
	<label>&lt;Bad---Good&gt;</label><br/>
	<label>1<input type="radio" name="clear" value="1"/></label>
	<label>2<input type="radio" name="clear" value="2"/></label>
	<label>3<input type="radio" name="clear" value="3"/></label>
	<label>4<input type="radio" name="clear" value="4"/></label>
	<label>5<input type="radio" name="clear" value="5"/></label>
	<br/>
    
    
    Your Message:<br>
    <textarea name="message" rows="7" cols="30"></textarea><br>
    <input type="submit" value="Send Suggestion"/>
    </form>
</center>
</body>
</html>