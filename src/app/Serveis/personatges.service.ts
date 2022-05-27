import { Injectable } from '@angular/core';

@Injectable()
export class PersonatgesService {
    private personatges:any[] = [
        {
          nombre: "Monkey D. luffy",
          bio: "En Monkey D. Luffy (モンキー・D・ルフィ), també anomenat Luffy Barret de Palla (麦わらのルフィ Mugiwara no Lufi),  és el protagonista principal de la sèrie i el capità de la tripulació. És un noi prim i musculós, de cabell negres, que sempre porta posat el seu característic barret de palla.",
          img: "assets/img/luffy.png",
          aparicion: "1941-11",
          casa:"One Piece"
        },
        {
          nombre: "Roronoa Zoro",
          bio: "En Roronoa Zoro (ロロノア・ゾロ), també conegut com a Caçapirates Zoro (海賊狩りのゾロ Kaizoku Gari no Zoro), és l'espadatxí de la tripulació. És un dels tres membres més forts del grup. És un noi de cabells verds i amb tres arracades a l'orella esquerra, que duu sempre una faixa a la panxa on porta les seves tres katanes i un mocador negre lligat al braç, que es posa al cap quan lluita seriosament.",
          img: "assets/img/zoro.jpg",
          aparicion: "1939-05",
          casa:"One Piece"
        },
        {
          nombre: "Nami",
          bio: "La Nami (ナミ), també coneguda com a Gata Lladre (泥棒猫 Dorobō Neko), és la oficial i cartògrafa de la tripulació, i encarregada de la navegació del vaixell. És una noia atractiva de pell clara i cabells taronges, amb un tatuatge a l'espatlla esquerra, i tot i que canvia sovint de vestuari, sol anar amb sandàlies, faldilles curtes i samarretes. És un dels membres més intel·ligents i li agraden molt els diners. ",
          img: "assets/img/nami.png",
          aparicion: "1964-01",
          casa: "One Piece"
        },
        {
          nombre: "Usopp",
          bio: "L'Usopp (ウソップ), també conegut amb el pseudònim de Sogeking el Rei dels Tiradors (狙撃の王様 Sogeki no Ō-sama) i posteriorment com a Déu Usopp (ゴッド Goddo), és el tirador de la tripulació. És un noi de pell morena i cabells arrissats i es caracteritza pel seu llarg nas. Sol dur un mocador al cap, sobre el qual porta unes ulleres de tirador.",
          img: "assets/img/usop.jpg",
          aparicion: "1962-05",
          casa:"One Piece"
        },
        {
          nombre: "Sanji",
          bio: "En Sanji (サンジ), també conegut com a Cama Negra (黒脚 Kuro Ashi), és el cuiner de la tripulació. És un noi ros, amb les celles en espiral. Sempre se'l veu fumant un cigarret i vesteix gairebé sempre amb un vestit negre elegant. És un home galant, cavallerós i molt perceptiu, a qui li encanta flirtejar amb qualsevol noia bonica que veu. Té el somni de trobar l'All Blue (オールブルー), un mar llegendari que conté qualsevol tipus de peix en el món.",
          img: "assets/img/sanji.jpg",
          aparicion: "1940-06",
          casa: "One Piece"
        },
        {
          nombre: "Tony Tony Chopper",
          bio: "En Tony Tony Chopper (トニートニー・チョッパー), també conegut com L'amant del Cotó de Sucre (わたあめ大好き Wataame Daisuki), és el metge de la tripulació. En Chopper és un ren que va menjar la Fruita Hito Hito, que li va donar la intel·ligència d'un ésser humà i l'habilitat de transformar-se en una criatura antropomòrfica. ",
          img: "assets/img/tony.png",
          aparicion: "1962-08",
          casa: "One Piece"
        },
        {
          nombre: "Nico Robin",
          bio: "La Nico Robin (ニコ・ロビン), també coneguda com a Nena Endemoniada (悪魔の子 Akuma no Ko), és l'arqueòloga de la tripulació. És una noia molt bonica, de pell morena i cabells negres llisos. Com la Nami, canvia de roba sovint, però sempre dur alguna peça de color negre o fosc i a vegades un barret de vaquer. La Robin és molt intel·ligent i pacient i és la més serena i tranquil·la de la tripulació. Té un costat macabre i li agrada senyalar fets mòrbids. ",
          img: "assets/img/nico.jpg",
          aparicion: "1974-11",
          casa: "One Piece"
        },
        {
          nombre: "Franky",
          bio: "En Franky (フランキー), també conegut com a Franky el Cíborg (フランキー Saibōgu Furankī) o Franky Home de Ferro (フランキー Tetsujin Furankī), és el mestre d'aixa de la tripulació. El seu nom real és Cutty Flam (カティ・フラム Kati Furamu). És un home de cabells blaus i de cos peculiar, amb uns grans avantbraços. Sol anar vestit amb camisa hawaiana i banyador eslip, i sempre va descalç. ",
          img: "assets/img/fran.png",
          aparicion: "1974-11",
          casa: "One Piece"
        },
        {
          nombre: "Brook",
          bio: "En Brook (ブルック), també conegut com a Brook el Cantaire (鼻歌のブルック Hanauta no Burukku) o com a Rei del Soul (ソウルキング Souru Kingu), és el músic de la tripulació. En Brook és un esquelet alt i prim, amb un pentinat afro. Sol portar un vestit elegant i un barret de copa. Té un caràcter molt peculiar tot i ser el més vell de la tripulació. Tot i que manifesta ser un cavaller, té unes maneres bastant vulgars i sovint demana a les noies que li ensenyin les calces.",
          img: "assets/img/brook.jpg",
          aparicion: "1974-11",
          casa: "One Piece"
        },
        {
          nombre: "Jinbe",
          bio: "En Jinbe (ジンベエ), també anomenat Cavaller del Mar (海侠 Kaikyō), és la incorporació més recent a la tripulació i de moment ha actuat com a timoner. És un home-peix de l'espècie tauró balena. Té una complexió robusta com un lluitador de sumo i la pell de color blavós, amb el tatuatge dels Pirates del Sol al mig del pit. Vesteix amb un quimono i una capa i porta sandàlies de fusta. ",
          img: "assets/img/jinbe.png",
          aparicion: "1974-11",
          casa: "One Piece"
        }

      ];

    constructor(){
        console.log("Apunt!!")

    }

    getPersonatges(){
      return this.personatges;
    }

    getPersonatge( idx:string){
      return this.personatges[idx];
    }

    buscarPersonatges(termino:string):Personatge[]{
        let personatgesArr:Personatge[] = [];
        termino = termino.toLowerCase();

        for (let i = 0; i < this.personatges.length; i++){
          let personatge = this.personatges[i];
          let nombre = personatge.nombre.toLowerCase();
          if (nombre.indexOf (termino) >= 0){
            personatge.idx = i;
            personatgesArr.push(personatge);
          }

        }

        return personatgesArr;
    }


}

export interface Personatge{
  nombre: String;
  bio: String;
  img: String;
  aparicion: String;
  casa: String;
  idx?: number;
};