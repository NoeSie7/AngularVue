Vue.component ('alerta',{
    props: ['tipo', 'posicion'],
    template: `
            <section class="alerta" :class="[tipo, posicion]">
                <header class="alerta__header">
                    <slot name="header"> Hola</slot>
                </header>
                <div class="alerta__contenido">
                    <slot>
                    Lorem ipsum sit amet,....
                    </slot>
                </div>
                <footer class="alerta__footer">
                <slot name="footer">Texto Footer</slot>
                </footer>
            
            
            </section>
    
                `,
});

new Vue ({
    el: '#app'
});