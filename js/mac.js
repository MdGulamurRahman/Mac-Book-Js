document.getElementById('memory-16gb').addEventListener('click', function(){
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 180;
    totalPrice()
})

document.getElementById('8gb-memory').addEventListener('click', function(){
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 0;
    totalPrice()
})
//----------------The area of Storage----------------//
document.getElementById('256gb-storage').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 0;
    totalPrice()
})
// 512gb
document.getElementById('512gb-storage').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 100;
    totalPrice()

})
// 1tb ssd
document.getElementById('1tb-storage').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 180;
    totalPrice()
})

//-----------Choose your delivery option------------//
document.getElementById('prime-delivery').addEventListener('click', function(){
    const deliveryCharge = document.getElementById('delivery-charge');
    deliveryCharge.innerText = 0;
    totalPrice()
})
//
document.getElementById('charge-delivery').addEventListener('click', function(){
    const deliveryCharge = document.getElementById('delivery-charge');
    deliveryCharge.innerText = 20;
    totalPrice()
})

// Total calculate function
function totalPrice(){
        const real_price = 1299;
        const a = document.getElementById('memory-cost').innerText;
        const ab = Number(a);
        const b = document.getElementById('storage-cost').innerText;
        const bc = Number(b);
        const c = document.getElementById('delivery-charge').innerText;
        const ca = Number(c);
        const totalPrice = real_price + ab + bc + ca;
        document.getElementById('total-price').innerText = totalPrice;
}

// the area of pomo code //
document.getElementById('apply-btn').addEventListener('click',function(){
    let a = document.getElementById('promo-code').value;
    if( a == 'stevekaku'){
        const c = document.getElementById('total-price').innerText;
        const d = Number(c);
        document.getElementById('final-price').innerText = d * 0.8;
    }
})

//-------------------------------END------------------------------//

