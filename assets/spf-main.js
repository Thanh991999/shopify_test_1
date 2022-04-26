const $1 = document.querySelector.bind(document);
const $$1 = document.querySelectorAll.bind(document);


function click_on_category_appear_product(container) {
    console.log( container, '.slider.best-selling')
    let sliderLists = document.querySelectorAll(`#shopify-section-${container} .spf-slider.best-selling`);
   
    let categoryItems = document.querySelectorAll(`#shopify-section-${container} .category-items`);
    
    sliderLists[0].classList.add('slider-active');
    
    categoryItems.forEach(function(item, index)
    {
        item.onclick = function(events) {
            
            // active appear slider 
            $1(`#shopify-section-${container} .category-items.active`).classList.remove('active');

            events.target.classList.add('active');

            document.querySelector(`#shopify-section-${container} .slider-active.best-selling`).classList.remove('slider-active');
            
            sliderLists[index].classList.add('slider-active');           

            // tạo biến để lấy từng cột danh mục trực tiếp
            const get_product_category = $$1(`#shopify-section-${container} .best-selling.slider-active .slider-items`);
            
            // console.log(get_product_category)

            // add animation on products

            get_product_category.forEach(function(productItem)
            {
                productItem.classList.add('play_animation');
                setTimeout(function(){
                    productItem.classList.remove('play_animation');
                }, 1100)
            })

        }
    })


}

//click_on_category_appear_product();

// active cart

const cart = $1('.nav-cart');
const cart_card = $1('.header__cart-list');

cart.addEventListener('click', function() {
    cart_card.classList.toggle('active');
})

const getMenu = $1('.menu-tab-mb');
const menu = $1('.nav-list');
const overlayMenu = $1('.overlay-menu');


if( getMenu) {

    getMenu.addEventListener('click', function() {
        menu.style.transform = 'translateX(0px)';
        menu.style.display = 'block';
        overlayMenu.style.display = 'block';

    })

    overlayMenu.onclick = function() {
        menu.style.transform = 'translateX(-100%)';
        menu.style.display = 'none';
        overlayMenu.style.display = 'none';
        
    }

    // const subMenuHeight = $1('.nav-item__funiture-list--tab-mob').offsetHeight;

    // $1('.nav-item:first-child').addEventListener('click', function() {
    //     $1('.nav-item__funiture-list--tab-mob').classList.toggle('subMenuHeight');
    // })
}


// active các dot trên hero section

const dotOptionVase = $$1('.header-wraper__dot--vase');

dotOptionVase.forEach(function(item, index) {
    
    item.addEventListener('click', function() {
        document.querySelectorAll('.product-wrapper__vase')[index].classList.toggle('active');
    })

})



// chỉnh height cho slider-category
if ( $1('.best-selling') )
{
    const sliderHeight = $1('.best-selling').clientHeight;
    console.log(sliderHeight)


    $$1('.best-selling__product').forEach(function(item)
    {
        item.style.height = `${sliderHeight + 60}px`;
    })

}

// set height cho hiệu ứng hover hiện submenu

const subMenuItemHeight = $1('.nav-item__funiture-link').offsetHeight;
const amountItems = $$1('.nav-item__funiture-items').length;

// console.log(subMenuItemHeight)

const heightSubMenu = `${(subMenuItemHeight + 10)*amountItems + 10}`

const subMenu = $1('.nav-item:first-child');

subMenu.onclick = function() {
      $1('.nav-item__funiture-list').classList.toggle('active');
}



