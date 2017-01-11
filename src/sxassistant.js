var SxAssistant = (function () {
    var module = {};
    module.init = function () {
        module.createButtonFillTableField();
        module.createButtonToLatin();
        module.createButtonFillCodeName();
    };
    module.createButtonFillCodeName = function () {
        var idSourceField = 'id_title';
        if (location.href.endsWith("@SXClass")) {
            idSourceField = 'id_description';
        }
        var button = document.createElement('button');
        button.id = 'sxassistantButtonFillCodeName';
        button.style.display = 'none';
        button.style.height = '17px';
        button.style.lineHeight = '10px';
        button.innerText = 'Заполнить транслитом кодовое имя';
        button.addEventListener('click', function () {
            event.preventDefault();
            document.getElementById('id_name').value = module.toCamelCase(module.toTransliterate(document.getElementById(idSourceField).value), idSourceField === 'id_description');
        }, false);
        var parentName = document.getElementById(idSourceField).parentElement;
        parentName.appendChild(button);
        parentName.addEventListener('mouseover', function () {
            document.getElementById('sxassistantButtonFillCodeName').style.display = 'inline';
        });
        parentName.addEventListener('mouseout', function () {
            document.getElementById('sxassistantButtonFillCodeName').style.display = 'none';
        });
    };
    module.createButtonFillTableField = function () {
        var button = document.createElement('button');
        button.id = 'sxassistantButtonFillTableField';
        button.style.display = 'none';
        button.style.height = '17px';
        button.style.lineHeight = '10px';
        if (location.href.endsWith("@SXClass")) {
            button.innerText = 'Заполнить наименование таблицы';
        } else {
            button.innerText = 'Заполнить поле таблицы';
        }
        button.addEventListener('click', function () {
            event.preventDefault();
            var srcValue = document.getElementById('id_name').value,
                destValue = '';
            if (srcValue != undefined && srcValue.length > 0) {
                destValue = srcValue.replace(/([A-Z])/g, '_$1')
                    .replace(/^_/g, '')
                    .toUpperCase();
            }
            if (location.href.endsWith("@SXAttr")) {
                destValue = 'A_' + destValue;
            }
            document.getElementById('id_map').value = destValue;
        }, false);
        var parentName = document.getElementById('id_name').parentElement;
        parentName.appendChild(button);
        parentName.addEventListener('mouseover', function () {
            document.getElementById('sxassistantButtonFillTableField').style.display = 'inline';
        });
        parentName.addEventListener('mouseout', function () {
            document.getElementById('sxassistantButtonFillTableField').style.display = 'none';
        });
    };
    module.createButtonToLatin = function () {
        var button = document.createElement('button');
        button.id = 'sxassistantButtonToLatin';
        button.style.display = 'none';
        button.style.height = '17px';
        button.style.lineHeight = '10px';
        button.innerText = 'Перевод на латиницу';
        button.addEventListener('click', function () {
            event.preventDefault();
            document.getElementById('id_name').value = module.toLatin(document.getElementById('id_name').value);
        }, false);
        var parentName = document.getElementById('id_name').parentElement;
        parentName.appendChild(button);
        parentName.addEventListener('mouseover', function () {
            document.getElementById('sxassistantButtonToLatin').style.display = 'inline';
        });
        parentName.addEventListener('mouseout', function () {
            document.getElementById('sxassistantButtonToLatin').style.display = 'none';
        });
    };
    module.toCamelCase = function (text, firstToUpper) {
        return text.replace(/^([A-Z])|\s(\w)/g, function(match, p1, p2, offset) {
            if (firstToUpper && offset == 0) {
                return p1.toUpperCase();
            }
            if (p2) {
                return p2.toUpperCase();
            }
            return p1.toLowerCase();
        });
    };
    module.toTransliterate = function (text) {
        return text
            .replace(/\u0401/g, 'YO')
            .replace(/\u0419/g, 'I')
            .replace(/\u0426/g, 'TS')
            .replace(/\u0423/g, 'U')
            .replace(/\u041A/g, 'K')
            .replace(/\u0415/g, 'E')
            .replace(/\u041D/g, 'N')
            .replace(/\u0413/g, 'G')
            .replace(/\u0428/g, 'SH')
            .replace(/\u0429/g, 'SCH')
            .replace(/\u0417/g, 'Z')
            .replace(/\u0425/g, 'H')
            .replace(/\u042A/g, '')
            .replace(/\u0451/g, 'yo')
            .replace(/\u0439/g, 'i')
            .replace(/\u0446/g, 'ts')
            .replace(/\u0443/g, 'u')
            .replace(/\u043A/g, 'k')
            .replace(/\u0435/g, 'e')
            .replace(/\u043D/g, 'n')
            .replace(/\u0433/g, 'g')
            .replace(/\u0448/g, 'sh')
            .replace(/\u0449/g, 'sch')
            .replace(/\u0437/g, 'z')
            .replace(/\u0445/g, 'h')
            .replace(/\u044A/g, "'")
            .replace(/\u0424/g, 'F')
            .replace(/\u042B/g, 'I')
            .replace(/\u0412/g, 'V')
            .replace(/\u0410/g, 'a')
            .replace(/\u041F/g, 'P')
            .replace(/\u0420/g, 'R')
            .replace(/\u041E/g, 'O')
            .replace(/\u041B/g, 'L')
            .replace(/\u0414/g, 'D')
            .replace(/\u0416/g, 'ZH')
            .replace(/\u042D/g, 'E')
            .replace(/\u0444/g, 'f')
            .replace(/\u044B/g, 'i')
            .replace(/\u0432/g, 'v')
            .replace(/\u0430/g, 'a')
            .replace(/\u043F/g, 'p')
            .replace(/\u0440/g, 'r')
            .replace(/\u043E/g, 'o')
            .replace(/\u043B/g, 'l')
            .replace(/\u0434/g, 'd')
            .replace(/\u0436/g, 'zh')
            .replace(/\u044D/g, 'e')
            .replace(/\u042F/g, 'Ya')
            .replace(/\u0427/g, 'CH')
            .replace(/\u0421/g, 'S')
            .replace(/\u041C/g, 'M')
            .replace(/\u0418/g, 'I')
            .replace(/\u0422/g, 'T')
            .replace(/\u042C/g, "'")
            .replace(/\u0411/g, 'B')
            .replace(/\u042E/g, 'YU')
            .replace(/\u044F/g, 'ya')
            .replace(/\u0447/g, 'ch')
            .replace(/\u0441/g, 's')
            .replace(/\u043C/g, 'm')
            .replace(/\u0438/g, 'i')
            .replace(/\u0442/g, 't')
            .replace(/\u044C/g, "'")
            .replace(/\u0431/g, 'b')
            .replace(/\u044E/g, 'yu');
    };
    module.toLatin = function (text) {
        return text.replace(/\u0439/g, 'q')
            .replace(/\u0446/g, 'w')
            .replace(/\u0443/g, 'e')
            .replace(/\u043a/g, 'r')
            .replace(/\u0435/g, 't')
            .replace(/\u043d/g, 'y')
            .replace(/\u0433/g, 'u')
            .replace(/\u0448/g, 'i')
            .replace(/\u0449/g, 'o')
            .replace(/\u0437/g, 'p')
            .replace(/\u0445/g, '[')
            .replace(/\u044a/g, ']')
            .replace(/\u0444/g, 'a')
            .replace(/\u044b/g, 's')
            .replace(/\u0432/g, 'd')
            .replace(/\u0430/g, 'f')
            .replace(/\u043f/g, 'g')
            .replace(/\u0440/g, 'h')
            .replace(/\u043e/g, 'j')
            .replace(/\u043b/g, 'k')
            .replace(/\u0434/g, 'l')
            .replace(/\u0436/g, ';')
            .replace(/\u044d/g, '\'')
            .replace(/\u044f/g, 'z')
            .replace(/\u0447/g, 'x')
            .replace(/\u0441/g, 'c')
            .replace(/\u043c/g, 'v')
            .replace(/\u0438/g, 'b')
            .replace(/\u0442/g, 'n')
            .replace(/\u044c/g, 'm')
            .replace(/\u0431/g, ',')
            .replace(/\u044e/g, '.')
            .replace(/\u002e/g, '/')
            .replace(/\u0419/g, 'Q')
            .replace(/\u0426/g, 'W')
            .replace(/\u0423/g, 'E')
            .replace(/\u041a/g, 'R')
            .replace(/\u0415/g, 'T')
            .replace(/\u041d/g, 'Y')
            .replace(/\u0413/g, 'U')
            .replace(/\u0428/g, 'I')
            .replace(/\u0429/g, 'O')
            .replace(/\u0417/g, 'P')
            .replace(/\u0425/g, '{')
            .replace(/\u042a/g, '}')
            .replace(/\u0424/g, 'A')
            .replace(/\u042b/g, 'S')
            .replace(/\u0412/g, 'D')
            .replace(/\u0410/g, 'F')
            .replace(/\u041f/g, 'G')
            .replace(/\u0420/g, 'H')
            .replace(/\u041e/g, 'J')
            .replace(/\u041b/g, 'K')
            .replace(/\u0414/g, 'L')
            .replace(/\u0416/g, ':')
            .replace(/\u042d/g, '"')
            .replace(/\u042f/g, 'Z')
            .replace(/\u0427/g, 'X')
            .replace(/\u0421/g, 'C')
            .replace(/\u041c/g, 'V')
            .replace(/\u0418/g, 'B')
            .replace(/\u0422/g, 'N')
            .replace(/\u042c/g, 'M')
            .replace(/\u0411/g, '<')
            .replace(/\u042e/g, '>')
            .replace(/\u002c/g, '?');
    };
    return module;
}());

SxAssistant.init();