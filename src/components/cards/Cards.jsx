import "./Cards.css"

export default function Cards() {
  return (
    <div class="container">
  <div class="card-deck">
    <div class="card">
      <img src="image1.jpg" class="card-img-top" alt="Card Image 1"/>
      <div class="card-body">
        <h5 class="card-title">Card 1</h5>
        <p class="card-text">Some text for Card 1.</p>
      </div>
    </div>
    <div class="card">
      <img src="image2.jpg" class="card-img-top" alt="Card Image 2"/>
      <div class="card-body">
        <h5 class="card-title">Card 2</h5>
        <p class="card-text">Some text for Card 2.</p>
      </div>
    </div>
    <div class="card">
      <img src="image3.jpg" class="card-img-top" alt="Card Image 3"/>
      <div class="card-body">
        <h5 class="card-title">Card 3</h5>
        <p class="card-text">Some text for Card 3.</p>
      </div>
    </div>
  </div>
</div>

  )
}
