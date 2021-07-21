<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 8
      h1 Acuerdos comerciales y reglamentación
    p Los acuerdos o convenios surgen entre el comprador y el proveedor, donde se establecen, estipulan y/o pactan las especificaciones, condiciones, restricciones y/o concesiones, para la compraventa de los bienes que necesita o requiere la empresa.
    p.mb-5 A continuación, se mencionan las características de estos acuerdos:
    .row.justify-content-between.mb-4
      .col-lg-1
      .col-lg-3.camhover
        .p-5.fcpbt.vis
          img(src='@/assets/curso/t8/f1.svg',alt="cantidad").w5_5rem.mx-auto.mb-4
          h5.text-center Cantidad
        .px-4.py-5.fcpbb.hid
          p.text-center.mb-0 Se relaciona con el precio de la compra, y puede ser que, a poca compra en lo relativo a cantidades, el precio suba; y en una compra de mucha cantidad, el precio baja en un porcentaje admisible para la empresa.
      .col-lg-3.camhover
        .p-5.fcpbt.vis
          img(src='@/assets/curso/t8/f2.svg',alt="precio").w5_5rem.mx-auto.mb-4
          h5.text-center Precio
        .px-4.py-5.fcpbb.hid
          p.text-center.mb-0 Este se relaciona con una compra alta o baja en su volumen de compra, en la calidad y en la forma de pago. 
      .col-lg-3.camhover
        .p-5.fcpbt.vis
          img(src='@/assets/curso/t8/f3.svg',alt="fecha de entrega").w5_5rem.mx-auto.mb-4
          h5.text-center Fecha de entrega
        .p-4.fcpbb.hid
          p.text-center.mb-0 Si la compra es de urgencia, la fecha de entrega puede ser de inmediato; si la compra es programada, las fechas de entrega serán de acuerdo con un plan de recepción; todo esto bajo las condiciones de compra y de venta, las que se deben de respetar por parte del proveedor, so pena de no volver a surtir. 
      .col-lg-1
    .row.justify-content-between
      .col-lg-1
      .col-lg-3.camhover
        .p-5.fcpbt.vis
          img(src='@/assets/curso/t8/f3.svg',alt="fecha de pago").w5_5rem.mx-auto.mb-4
          h5.text-center Fecha de pago
        .px-4.py-5.fcpbb.hid
          p.text-center.mb-0 Generalmente, esta se negocia si van a ser diferentes las condiciones de venta que nos da el proveedor, y puede ser a 45 días o a dos meses; debemos recordar que todas las facturas se pagan después de la presentación de la factura y, por lo general, se fecha a 30 días.
      .col-lg-3.camhover
        .p-5.fcpbt.vis
          img(src='@/assets/curso/t8/f4.svg',alt="Garantia").w5_5rem.mx-auto.mb-4
          h5.text-center Garantía
        .px-4.py-5.fcpbb.hid
          p.text-center.mb-0 El área de compras exige la garantía de calidad del proveedor, la que sin duda se cumple; pero hay ocasiones que se negocia una garantía mayor y, por lo general, también se cumple.
      .col-lg-3.camhover
        .p-5.fcpbt.vis
          img(src='@/assets/curso/t8/f5.svg',alt="Lugar y hora de la recepción").w5_5rem.mx-auto.mb-4
          h5.text-center Lugar y hora de la recepción
        .px-4.py-5.fcpbb.hid
          p.text-center.mb-0 De acuerdo con las políticas de la empresa compradora, esta es la que impone hora y día para recepción de lo comprado; solo en casos de extrema urgencia, esta condición no se respeta.
      .col-lg-1
    p.mb-5 
    PasosA.color-acento-botones.mb-5(tipo="n")
      .row
        .col-auto
          p La concertación emerge entre el comprador y el proveedor, donde se definen las condiciones de la compraventa; entre estas condiciones se destacan:
          ul.lista-ul
            li.mb-0
              i.fas.fa-atom.cs.me-4
              p Cantidad y especificaciones.
            li.mb-0
              i.fas.fa-atom.cs.me-4
              p Precio.
            li.mb-0
              i.fas.fa-atom.cs.me-4
              p Garantía.
            li.mb-0
              i.fas.fa-atom.cs.me-4
              p Fecha de entrega.
            li.mb-0
              i.fas.fa-atom.cs.me-4
              p Fecha de pago.
      .row
        .col-auto
          p Este convenio se establece por escrito; puede decirse que es un acuerdo entre comprador y vendedor, y donde se estipulan entre otras: 
          ul.lista-ul
            li.mb-0
              i.fas.fa-atom.cs.me-4
              p La compraventa y el precio.
            li.mb-0
              i.fas.fa-atom.cs.me-4
              p Las condiciones de pago.
            li.mb-0
              i.fas.fa-atom.cs.me-4
              p Las condiciones de entrega y el lugar.
            li.mb-0
              i.fas.fa-atom.cs.me-4
              p La garantía.
            li.mb-0
              i.fas.fa-atom.cs.me-4
              p La cantidad de la compra.
      .row
        .col-auto
          p Para que este convenio tenga validez, se necesita: 
          ul.lista-ul
            li.mb-0
              i.fas.fa-atom.cs.me-4
              p Esté firmado por un funcionario de la empresa y el proveedor o el vendedor.
            li.mb-0
              i.fas.fa-atom.cs.me-4
              p Se realice conforme a la ley.
            li.mb-0
              i.fas.fa-atom.cs.me-4
              p Se estipulen responsabilidades por ambos firmantes.
            li.mb-0
              i.fas.fa-atom.cs.me-4
              p Se establezcan penalidades, si hay fallas en lo solicitado.
            li.mb-0
              i.fas.fa-atom.cs.me-4
              p Otros acuerdos.
      .row
        .col-auto
          p Tipos de convenios de acuerdo con el precio: 
          ul.lista-ul
            li.mb-0
              i.fas.fa-atom.cs.me-4
              p Precio.
            li.mb-0
              i.fas.fa-atom.cs.me-4
              p Costo adicional.
            li.mb-0
              i.fas.fa-atom.cs.me-4
              p Abierto.
            li.mb-0
              i.fas.fa-atom.cs.me-4
              p Para cada artículo o por cada partida.
            li.mb-0
              i.fas.fa-atom.cs.me-4
              p Adicional.
            li.mb-0
              i.fas.fa-atom.cs.me-4
              p Con entregas parciales y pagos por cada entrega.
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
