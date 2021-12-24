import { Component, OnInit } from '@angular/core';
import { Service } from '../../models/Service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  services: Service[] = [
    { 
      title: "Fogkőeltávolítás", 
      content: "Étkezés során a fogak, fogpótlások és a protézisek felszínén kialakul egy vékony, színtelen, szabad szemmel alig látható plakkréteg. Ez nagyrészt feloldódott ételmaradékból áll és kitűnő táptalaj a baktériumok számára. A plakk idővel elmeszesedik, ezt nevezzük fogkőnek. A fogkő nem csak esztétikailag zavaró, hanem súlyos fogágybetegségek elindítója is lehet. Az íny begyulladását okozza,vörössé válik, megduzzad, majd étkezés során, fogmosáskor, később spontán is vérezni kezd. Ha a fogkő nem kerül időben eltávolításra, és folyamatosan fenntartja a fogíny gyulladását, akkor az íny idővel visszahúzódik. A gyulladás ráterjed az állkapocs-csontokra, ami a fog meglazulásához,elvesztéséhez vezethet. Bármilyen alaposan is mossuk és fogselymezzük fogainkat, mindig lesznek nehezen elérhető területek. A professzionális fogkőeltávolítás segítségével a fogak tökéletesen megtisztíthatóak. Pácienseimnek rendszeres, legalább évente két alkalommal ajánlom a fogkőeltávolítást, így megelőzhető az ínygyulladás és a fogágybetegség kialakulása.", 
      imageSrc: "../../../assets/service-small.jpg"
    },
    { 
      title: "Airflow", 
      content: "Az Airflow fogpolírozás a legjobb módja annak, hogy eltávolítsuk a dohányzás, vörösbor, tea vagy kávé okozta foltokat és elszíneződéseket fogaid felszínéről. Az eljárás fehéríti a fogakat, közben alaposan tisztít. Az Airflow technológia lényege, hogy szódabikarbónát, vizet és levegőt fújunk nagy nyomáson a fogaidra. Ez az eljárás az eddigi leggyengédebb és leggyorsabb fogpolírozási technika. A légfújással végzett polírozás azért is jó választás, mert a makacs, csúnya foltok mellett hatékonyan eltávolít minden baktériumot a szádban.Mivel ez a módszer nem igényel hőt vagy a fogak rezgetését, az Airflow polírozás ideális azok számára, akik érzékeny fogakkal szenvednek.", 
      imageSrc: "../../../assets/service-small.jpg"
    },
    { 
      title: "Hyaluronsavas kezelés", 
      content: "A hyaluronsav az emberi szervezetben természetesen előfordul, megtalálható a szájnyálkahártya állományában is. A sejtközi állomány nélkülözhetetlen építő eleme. Hiányában vagy alacsony szintje esetén a szövetek sérülékenyebbek, lassabban gyógyulnak, nagyobb a gyulladásra való hajlam. Tehát a szájnyálkahártyán történő alkalmazása elsősorban a sebgyógyulás felgyórsítása,fájdalomcsillapítás és gyulladáscsökkentés érdekében történik. Különösen alkalmas a parodontális betegségek akut állapotának kezelésére. A hyaluronsav csökkenti az ínyvérzést,duzzanatot és serkenti a fogíny regenerációját.", 
      imageSrc: "../../../assets/service-small.jpg"
    },
    { 
      title: "Professzionális fogfehérítés", 
      content: "A dohányzás, a kávé, a tea, és a mai élelmiszerekben nagy mennyiségben előforduló mesterséges színezőanyagok illetve bizonyos gyógyszerek a fogak elszíneződését okozzák. Ki ne szeretne egy önbizalmat sugárzó, megnyerő mosolyt, esztétikus, fehéren ragyogó fogsort. A fogászati kezelésektől félő pácienseknek fontos tudni, hogy a fogfehérítés egy kifejezetten esztétikai kezelés, és nem fogorvosi beavatkozás. Teljesen biztonságos kezelés, mely nem károsítja a fogzománcot. Lényege a biztonság és a hatékonyság. Professzionális fogfehérítés hatékonyságára és eredményére garancia a szakember felügyelete mellett történő kezelés. Kezelés során nagy hatékonyságú fehérítő anyagot juttatunk a fogak felületére, mely oxidáció útján bontja a fogak elszíneződéséért felelős festékanyagok makromolekuláit. A rendelőmben a legmodernebb fogfehérítő anyagokat használom, amellyel gyors és rendkívül látványos eredmény érhető el kíméletesen.",
      imageSrc: "../../../assets/service-small.jpg"
    },
    { 
      title: "Fogzománcvédő kezelés", 
      content: "Tooth Mousse: a fogak érzékenységét megszűnteti, emelett mineralizál, így használatát javaslom fogfehérítés és fogkő-eltávolítás után is. Helyreállítja a szájüreg ásványianyag-egyensúlyát, fokozza a nyáltermelést, mely szájszárazságnál igen jelentős. Védelmet nyújt a fogszuvasodással szemben. gyermekeknek és felnőtteknek is egyaránt ajánlom.", 
      imageSrc: "../../../assets/service-small.jpg"
    },
    { 
      title: "Fogérzékenységet csökkentő kezelés", 
      content: "Az íny a visszahúzodása során, a fog nyaki részéről a gyökér irányába húzodik. Ez történhet genetikai, fog rendellenességbeli, vagy akár helytelen fogmosási okból adódoan is. Mivel a gyökér felszínét nem borítja zománc réteg, csak egy vékony cement, így fognyaki érzékenységet, hideg-meleg, savas ételek, italok fogyasztásakor jelentkező fájdalmat eredményezhet. A fájdalmat fogmosás is kiválthatja, így a páciens elkerüli az adott terület tisztítását, amely lepedék felhalmozodást ezáltal ínygyulladást eredményez. Ezeket az érzékeny fognyaki területeket, kezdeti stádiumban elég egy vékony lakkréteggel bevonni, amely akár fél évig is lezárja az érzékenységet.", 
      imageSrc: "../../../assets/service-small.jpg"
    },
  ]

  constructor() {}

  ngOnInit() {}
}
