<html>
    <head>
        <title>calculator</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="style.css" rel="stylesheet">
    </head>

    <body>
        <?php
            $number1 = rand(0,1000);
            $number2 = rand(1,1000);
            $operatives = array("+","-","*","/");
            $index = rand(0,3);
            $result = 0;

            if($operatives[$index] == "+")
                $result = $number1 + $number2;
            else if($operatives[$index] == "-")
                $result = $number1 - $number2;
            else if($operatives[$index] == "*")
                $result = $number1 * $number2;
            else
                $result = $number1 / $number2;
            
            echo '<h3 style="margin:30px;">' . $number1 . " " . $operatives[$index] . " " . $number2 . " = " . $result . "</h3>";
            
        ?>
    </body>
</html>