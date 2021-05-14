import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
 
  constructor(props) {
    super(props);
    
   
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "",
      flipping: false,
      donus: 0,
      yazisayisi: 0,
      turasayisi: 0
    };  
    ;
  }
  
  handleClick = () => {
   
    var yazitura=["yazi","tura"];
    var random=Math.floor(Math.random()*yazitura.length);
    this.setState({donus: (this.state.donus) + 1})
    var yazituradurumu=yazitura[random];
    if (yazituradurumu==="yazi"){this.setState({yazisayisi: (this.state.yazisayisi) + 1})}
    if (yazituradurumu==="tura"){this.setState({turasayisi: (this.state.turasayisi) + 1})}
 

    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ flipping: true, side:yazituradurumu});
  
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);

  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>Hadi At.. Bol Şans !</button>
        <p> 
        Toplam <strong> {this.state.donus} </strong> atıştan
          <strong> {this.state.turasayisi} </strong>tanesi <span className={this.state.side==="tura" ? "glow":""}>Tura</span>  
          <strong> {this.state.yazisayisi}  </strong> tanesi <span className={this.state.side==="yazi" ? "glow":""}>Yazı</span> geldi.
        </p>

      </div>
    );
  }
}

export default CoinFlipper;
