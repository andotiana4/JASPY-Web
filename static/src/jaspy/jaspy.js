title('JASPY WEB APPLICATION');
link('/static/vendor/aos/aos.css');
icon('static/img/favicon.png');
link('/static/css/jaspy.css');

Create_Element_after_root('img', 'src', 'static/src/jaspy/jaspy.png');
Add_IdByTag('img', 0, 'image-jaspy');
Set_Attribut('image-jaspy',  'width', '500');
Set_Attribut('image-jaspy',  'height', '500');

Create_Element_after_root('h1', 'id', 'use-code');
Create_other_Element('use-code', 'span', 'class', 'soratana');
Add_IdByClass('soratana', 0, 'fiarahabana');
Set_Attribut('fiarahabana', 'data-soratra', 'Welcome to Jaspy Web application, src : static/js/index.js');




script("/static/vendor/typed.js/typed.min.js");
script("/static/js/jaspy.js");