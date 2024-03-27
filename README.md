Note: Do not us flex and use tje "use client" directive

# 1 installation

1 : " npm install react-slick --save "
2 : " npm install slick-carousel --save "

# 2 imports

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

# 3 give the setting

const settings = {
dots: true,
infinite: true,
speed: 500,
slidesToShow: 3,
slidesToScroll: 3
}

# 4 use the slider slider

<Slider {...settings}>
<div>
cart
</div>
<div>
<div>
cart
</div>
<div>
<div>
cart
</div>
<div>
<div>
cart
</div>
<div>
<div>
cart
</div>
<div>
</Slider>

# 5 given the gape between carts

write code in global.css

.slick-slide > div{
margin: 0 10px;
}
