<!DOCTYPE html>
<html>
<head>
    <link href="css/boxmania.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/boxmania.js"></script>
</head>

<body >

<script type="text/javascript">
    $(function () {
        boxmania('#pane');
    });
</script>


<div id="pane">
    <?php for ($i = 1; $i <= 20; $i++) {
    echo "<div class='block' data-no='".$i."'></div>";
    } ?>
</div>

</body>
</html>