const card= document.getElementById("cardR")

let bikes=[{
  color: "red",
  wheels: 2,
  engine: {
    cylinders: 4,
    size: 2.2,
  },},
  {
    color: "blue",
    wheels: 2,
    engine: {
      cylinders: 4,
      size: 2.2,
    },
},
{
  color: "white",
  wheels: 2,
  engine: {
    cylinders: 4,
    size: 2.2,
  },
},
{
  color: "black",
  wheels: 2,
  engine: {
    cylinders: 4,
    size: 2.2,
  },
},
{
  color: "lite blue",
  wheels: 2,
  engine: {
    cylinders: 4,
    size: 2.2,
  },
},
{
  color: "green",
  wheels: 4,
  engine: {
    cylinders: 4,
    size: 1.2,
  },
},
{
  color: "yellow",
  wheels: 4,
  engine: {
    cylinders: 4,
    size:1.5,
  },
},
{
  color: "gold",
  wheels: 4,
  engine: {
    cylinders: 4,
    size: 1.2,
  },
},
{
  color: "orange",
  wheels: 4,
  engine: {
    cylinders: 4,
    size: 1.2,
  },
},
{
  color: "gray",
  wheels: 4,
  engine: {
    cylinders: 4,
    size: 1.5,
  },
},
{
  color: "pearl",
  wheels: 4,
  engine: {
    cylinders: 4,
    size: 1.5,
  },
},
{
  color: "red",
  wheels: 4,
  engine: {
    cylinders: 4,
    size: 1.5,
  },
},
{
  color: "silver",
  wheels: 4,
  engine: {
    cylinders: 4,
    size: 1.2,
  },
},
{
  color: "steel met",
  wheels: 4,
  engine: {
    cylinders: 4,
    size: 1.5,
  },
},
{
  color: "black pearl",
  wheels: 4,
  engine: {
    cylinders: 4,
    size: 1.2,
  },
},
{
  color: "hawk black",
  wheels: 4,
  engine: {
    cylinders: 4,
    size: 1.2,
  },
},
{
  color: "urban titanium",
  wheels: 4,
  engine: {
    cylinders: 4,
    size: 1.5,
  },
},
{
  color: "frosty white",
  wheels: 4,
  engine: {
    cylinders: 4,
    size: 1.5,
  },
},
{
  color: "blue met",
  wheels: 4,
  engine: {
    cylinders: 4,
    size: 1.2,
  },
},
{
  color: "gray met",
  wheels: 4,
  engine: {
    cylinders: 4,
    size: 1.2,
  },
},
]
 

bikes.forEach((element) => {
  cardR.innerHTML +=
  `<div class="col-4 mb-5">
  <div class="card border-dark" style="width: 100%;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item border-dark">
        <h3>Color is ${element.color}</h3>
      </li>
      <li class="list-group-item border-dark">
        <h3>wheels is ${element.wheels}</h3>
      </li>
      <li class="list-group-item border-dark">
        <h3>Engine Cylinders is ${element.engine.cylinders}</h3>
      </li>
      <li class="list-group-item border-dark">
        <h3>Engine Size is ${element.engine.size}</h3>
      </li>
    </ul>
  </div>
</div>`
})