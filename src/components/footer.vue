<template>
  <footer class="pie-pagina">
    <div class="grupo-1">
        <div class="box">
            <figure>
                <a><img src="https://www.thedesignfrontier.com/wp-content/uploads/2019/05/f1-logo-big.png"   alt="logo"></a>
            </figure>
        </div>
        <div class="box">
            <h2>SOBRE NOSOTROS</h2>
            <h6>Página de Fórmula 1 para los amantes del mundo del motor.</h6>
            <h6>Hecha con mucho amor y cariño.</h6>
        </div>
        <div class="box">
        <h2>SÍGUENOS</h2>
        <div class="red-social">
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-instagram"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-youtube"></a>
        </div>
        </div>
        </div>
    <div class="grupo-2">
        <small>&copy; 2023 <b>Cristina</b> -Todos los Derechos Reservados</small>
    </div>
</footer>
</template>

<script>
export default {
    name : "Footer"

}
</script>

<style>
.pie-pagina{
    width:100%;
    background-color: rgb(244, 46, 46);
}

.pie-pagina .grupo-1{
    width:100%;
    max-width:1200px;
    margin:auto;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap:50px;
    padding:45px 0px;

}
.pie-pagina .grupo-1 .box figure{
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items: center;
}
.pie-pagina .grupo-1 .box figure img{
    width:250px;
}

.pie-pagina .grupo-1 .box h2{
    color:black;
    margin-bottom:25px;
    font-size:20px;
    font-family: 'Orbitron', sans-serif;
}

.pie-pagina .grupo-1 .box h6{
    color:black;
    margin-bottom: 10px;
    font-family: 'Teko', sans-serif;
    font-size: 15px;
}

.pie-pagina .grupo-1 .red-social a{
    display:inline-block;
    text-decoration: none;
    width:45px;
    height:45px;
    line-height: 45px;
    color:black;
    margin-right:10px;
    background-color: whitesmoke;
    text-align: center;
    transition: all 300ms ease;
    border-radius: 3px;;
}



.pie-pagina .grupo-2{
    padding: 15px 10px;
    text-align: center;
    color:black;
}

.pie-pagina .grupo-2 small{
    text-align: center;
    font-size: 15px;
    font-family: 'Teko', sans-serif;
}
</style>