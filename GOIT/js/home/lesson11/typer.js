<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<script>
    var typer = (function() {

        return {
            isNumber: function(value) {return typeof value != "undefined" && typeof value.valueOf() == "number" && !isNaN(value.valueOf())},
            isString: function(value) {return typeof value != "undefined" && typeof value.valueOf() == "string"},
            isArray: function(value) {return Array.isArray(value);},
            isFunction: function(value) {return typeof value == 'function';},
            isDate: function(value) {return value instanceof Date},
            isRegExp: function(value) {return value instanceof RegExp;},
            isBoolean: function(value) {return typeof value.valueOf() == "boolean"},
            isError: function(value) {return value instanceof Error;},
            isNull: function(value) {return x === null && typeof x != "undefined"},
            isUndefined: function(value) {return typeof value == 'undefined';}
        };
    }(null));
</script>
</body>
</html>