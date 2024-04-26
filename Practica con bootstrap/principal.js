$('.carousel').carousel({
    interval: 2000
  })



  const btnCart = document.querySelector('.container-icon')
  const containerCartProducts = document.querySelector('.container-cart-products')
  
  btnCart.addEventListener('click', () => {
      containerCartProducts.classList.toggle('hidden-cart')
  })
  
  document.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', () => {
          // Obtener información del producto
          const producto = button.parentNode.querySelector('h2').textContent;
          const precio = parseFloat(button.parentNode.querySelector('.price').textContent.replace('€', ''));
  
          // Llamar a la función addToCart para agregar el producto al carrito
          addToCart(producto, precio);
      });
  });
  
  function addToCart(producto, precio) {
      // Crear elementos para el nuevo producto
      var nuevoProducto = document.createElement('div');
      nuevoProducto.classList.add('cart-product');
      
      var nuevaInfoProducto = document.createElement('div');
      nuevaInfoProducto.classList.add('info-cart-product');
      
      var nuevaCantidad = document.createElement('span');
      nuevaCantidad.classList.add('cantidad-producto-carrito');
      nuevaCantidad.textContent = '1';
      
      var nuevoTitulo = document.createElement('p');
      nuevoTitulo.classList.add('titulo-producto-carrito');
      nuevoTitulo.textContent = producto;
      
      var nuevoPrecio = document.createElement('span');
      nuevoPrecio.classList.add('precio-producto-carrito');
      nuevoPrecio.textContent = precio + '€';
  
      // Agregar los elementos creados al nuevo producto
      nuevaInfoProducto.appendChild(nuevaCantidad);
      nuevaInfoProducto.appendChild(nuevoTitulo);
      nuevaInfoProducto.appendChild(nuevoPrecio);
      
      nuevoProducto.appendChild(nuevaInfoProducto);
      
      // Agregar el nuevo producto al carrito
      var containerCartProducts = document.querySelector('.container-cart-products');
      containerCartProducts.appendChild(nuevoProducto);
  
      // Incrementar el contador de productos en el carrito
      var contadorProductos = document.getElementById('contador-productos');
      var cantidadActual = parseInt(contadorProductos.textContent);
      contadorProductos.textContent = cantidadActual + 1;
  
      // Actualizar el total a pagar
      var totalPagar = document.querySelector('.total-pagar');
      var precioActual = parseFloat(totalPagar.textContent.replace('€', ''));
      totalPagar.textContent = (precioActual + precio) + '€';
  }
  