// javascriptのみで頑張ろうとしているバージョン

// var tablename = document.getElementsByClassName("race_results");
// // console.log(tablename);
// var trtg1 = tablename[0].getElementsByTagName('tr');
// var trtg2 = tablename[1].getElementsByTagName('tr');
// // console.log(trtg1.length);
// var lastnum1 = trtg1.length - 1;
// var lastnum2 = trtg2.length - 1;
// var trtg1 = trtg1[lastnum1];
// var trtg2 = trtg2[lastnum2];
// trtg1.classList.add('rowBottom');
// trtg2.classList.add('rowBottom');

function borderset(name, num) { // 年と年の境目は下線を太くする
    var tablename = document.getElementsByClassName(name); // テーブルのクラス名を指定できるように
    var thisYear = tablename[num].getElementsByClassName("date"); // 同じクラス名なら番号を指定指定できるように
    for (var i = 0; i < (thisYear.length - 1); i++) {
        var thisy = thisYear[i]; // 現在行のtd(.date)
        var thisytext = thisy.textContent; // 現在行のテキスト
        var parenty = thisy.parentNode; // 現在行のtd要素の親要素 (tr)
        var nextelem = parenty.nextElementSibling; // 親要素の１段下 
        var nexty = nextelem.firstElementChild; // 親要素の１段下の要素の子要素の１番目 td(.date)
        var nextytext = nexty.textContent; // １段下のテキスト

        if ( nextytext !== thisytext) { // 現在行のテキストと１段下のテキストが違う場合，下線を太くする．
            parenty.classList.add('rowBottom');
        }
    }
};
borderset('race_results', 0);
borderset('race_results', 1);

// //  $(".date").each(function(i, e){
//  document.querySelector('date').each(function(i, e){
//     var thisyear = $(e);
//     if ( $("td",thisyear.parent().nextAll()).eq(thisyear.index()).length ) {
//         var nextyear = $("td", thisyear.parent().nextAll()).eq(thisyear.index());
//         if (thisyear.text() !== nextyear.text()) {
//             thisyear.parent().addClass("rowBottom")
//         }
//     }
//  });
// $("#race_results").find("tr").filter(":last").addClass("rowBottom")
//

// // 枠順に色付け
function gate_color(name) {
    var gate_box = document.getElementsByClassName(name);
    for (i = 0; i < gate_box.length; i++) {
        var gate = gate_box[i];
        var gate_num = gate.textContent;
        if (gate_num == '1') {
            gate.classList.add('gate1');
        }
        else if (gate_num == '2') {
            gate.classList.add('gate2');
        }
        else if (gate_num == '3') {
            gate.classList.add('gate3');
        }
        else if (gate_num == '4') {
            gate.classList.add('gate4');
        }
        else if (gate_num == '5') {
            gate.classList.add('gate5');
        }
        else if (gate_num == '6') {
            gate.classList.add('gate6');
        }
        else if (gate_num == '7') {
            gate.classList.add('gate7');
        }
        else if (gate_num == '8') {
            gate.classList.add('gate8');
        }

    }
};
gate_color('gate');

// // 枠順に色付け
// function gate_color(name) {
//     $(name).each(function(i, e) {
//         let gate_num = $(e).text();
//         if (gate_num=='1') {
//             $(e).addClass('gate1');
//         }
//         else if (gate_num=='2') {
//             $(e).addClass('gate2');
//         }
//         else if (gate_num=='3') {
//             $(e).addClass('gate3');
//         } 
//         else if (gate_num=='4') {
//             $(e).addClass('gate4');
//         } 
//         else if (gate_num=='5') {
//             $(e).addClass('gate5');
//         } 
//         else if (gate_num=='6') {
//             $(e).addClass('gate6');
//         } 
//         else if (gate_num=='7') {
//             $(e).addClass('gate7');
//         } 
//         else if (gate_num=='8') {
//             $(e).addClass('gate8');
//         }
//     });
// };
// gate_color('.gate');

// 数値が 0 か 0.0 の場合、-(ハイフン) に書き換え
function change_zero_into_hyphen(name) {
    var zero_data = document.getElementsByClassName(name);
    for (i = 0; i < zero_data.length; i++) {
        var zero_list = zero_data[i];
        var zero_list_text = zero_list.textContent;
        if (zero_list_text=='0.0' || zero_list_text=='0') {
            zero_list.textContent = '-';
        }
    }
};
change_zero_into_hyphen('l3fl');
change_zero_into_hyphen('rank');

// // 数値が 0 か 0.0 の場合、-(ハイフン) に書き換え
// function hyphen(name) {
//     $(name).each(function(i, e) {
//         if ($(e).text()=='0.0' || $(e).text()=='0' ){
//             $(e).text('-');
//         }
//     });
// };
// hyphen('.l3fl');
// hyphen('.rank');

// // 順位１～３位に色付け
function addColorRank(name) {
    var rank_data = document.getElementsByClassName(name);
    for (i = 0; i < rank_data.length; i++) {
        var rank_list = rank_data[i];
        var rank_list_text = rank_list.textContent;
        if (rank_list_text == '1') {
            rank_list.classList.add('rank1');
        }
        else if (rank_list_text == '2') {
            rank_list.classList.add('rank2');
        }
        else if (rank_list_text == '3') {
            rank_list.classList.add('rank3');
        }
    }
}
addColorRank('fin');
addColorRank('zfin');
addColorRank('l3fl');
addColorRank('rank');
// // 順位１～３位に色付け
// function rank_color(name) {
//     $(name).each(function(i, e) {
//         if ($(e).text()=='1') {
//             $(e).addClass('rank1');
//         } 
//         else if ($(e).text()=='2') {
//             $(e).addClass('rank2');
//         } 
//         else if ($(e).text()=='3') {
//             $(e).addClass('rank3');
//         }
//     });
// };
// rank_color('.fin');
// rank_color('.zfin');
// rank_color('.l3fl');
// rank_color('.rank');
//
// ５番人気以下は赤くする
function addColorBackRed(name) {
    var pop_data = document.getElementsByClassName(name);
    for (i = 0; i < pop_data.length; i++) {
        var pop_list = pop_data[i];
        var pop_list_text = pop_list.textContent;
        if (pop_list_text > 4) {
            pop_list.classList.add('unpop');
        }
    }
};
addColorBackRed('pop');

// ５番人気以下は赤くする
// function pop_color(name) {
//     $(name).each(function(i, e) {
//         if ($(e).text() > 4) {
//             $(e).addClass('unpop');
//         }
//     });
// };
// pop_color('.pop');

// // 上がり３ハロン順位に応じて、上がり３ハロンタイムにも色付け
function addColorLast3furlong(name) {
    var l3fl_data = document.getElementsByClassName(name);
    for (i = 0; i < l3fl_data.length; i++) {
        var l3fl_list = l3fl_data[i];
        var l3fl_rank = l3fl_list.nextElementSibling;
        var l3fl_rank_text = l3fl_rank.textContent;
        if (l3fl_rank_text == '1') {
            l3fl_list.classList.add('rank1');
        }
        else if (l3fl_rank_text == '2') {
            l3fl_list.classList.add('rank2');
        }
        else if (l3fl_rank_text == '3') {
            l3fl_list.classList.add('rank3');
        }
    }
};
addColorLast3furlong('l3fl');

// // 上がり３ハロン順位に応じて、上がり３ハロンタイムにも色付け
// // 右隣の数字によってClassが決まる
// $('.l3fl').each(function(i, e) {
//     rank = $(e).next().text();
//     if (rank=='1') {
//         $(e).addClass('rank1');
//     } 
//     else if (rank=='2') {
//         $(e).addClass('rank2');
//     } 
//     else if (rank=='3') {
//         $(e).addClass('rank3');
//     }
// });

// // 種牡馬の色分け
function test(name, x) {
    var myself_data = document.getElementsByClassName(name);
    for (i = 0; i < myself_data.length; i++) {
        var myself = myself_data[i];
        var clone = myself_data[i];
        var myname = myself.textContent;
        var clonename = myself.textContent;
        var ped_list = [myname];
        for(a = 0; a < x; a++) {
            var clone = clone.nextElementSibling;
            var clonename = clone.textContent;
            ped_list.push(clonename);
        }

        console.log(myname);
        console.log(myself);
        console.log(ped_list);

        // サンデー系（母父トニービン）

        if (/ハーツクライ|リンカーン|サムライハート/.test(ped_list)) {
            myself.classList.add('SundayTB');
            myself.setAttribute("title", "サンデー系（母父トニービン）");

        }
        // サンデーサイレンス系
        else if (/サンデーサイレンス|Sunday Silence/.test(ped_list)) {
            myself.classList.add('SundayS');
            myself.setAttribute("title", "サンデーサイレンス系");
        }
        //      ヘイロー系
        else if (/Halo/.test(ped_list)) {
            myself.classList.add('Halo');
            myself.setAttribute("title", "ヘイロー系");

        }
        //      ロベルト系
        else if (/Roberto/.test(ped_list)) {
            myself.classList.add('Roberto');
            myself.setAttribute("title", "ロベルト系");

        }
        //      サーゲイロード系
        else if (/ニホンピロウイナー|スティールハート|Marauding|Sir Tristram|Sir Ivor| Habitat|Sir Gaylord/.test(ped_list)) {
            myself.classList.add("Sir-Gaylord");
            myself.setAttribute("title", "サーゲイロード系");

        }
        //          ターントゥ系
        else if (/Hail to Reason|Turn-to/.test(ped_list)) {
            myself.classList.add("Turn-to");
            myself.setAttribute("title", "ターントゥ系");

        }
        //              ロイヤルチャージャー系
        else if (/Royal Charger|ロイヤルチャレンヂャー/.test(ped_list)) {
            myself.classList.add("RoyalCharger");
            myself.setAttribute("title", "ロイヤルチャージャー系")
        }
        //************************************ ノーザンダンサー系 ～ ニアークティック系 ********************************/
        // アイスカペイド系
        else if (/Wild Again|Icecapade/.test(ped_list)) {
            myself.classList.add("Icecapade");
            myself.setAttribute("title", "アイスカペイド系\n(ニアークティック系)");
        }
        // ヴァイスリージェント系
        // else if (/"クロフネ"|"フレンチデピュティ"|"French Deputy"|"Deputy Minister"|"Vice Regent"/.test(ped_list)) {
        else if (/クロフネ|フレンチデピュティ|French Deputy|Deputy Minister|Vice Regent/.test(ped_list)) {
            myself.classList.add("ViceRegent");
            myself.setAttribute("title", "ヴァイスリージェント系\n(ノーザンダンサー系)");
        }
        // ストームバード系
        else if (/Storm Cat|Storm Bird/.test(ped_list)) {
            myself.classList.add("StormBird");
            myself.setAttribute("title", "ストームバード系\n(ノーザンダンサー系)");

        }
        // ノーザンダンサー系(ダート)
        /*else if (//.test(ped_list)) {
           myself.classList.add(DND);
           myself.setAttribute("title", ノーザンダンサー系（ダート）);

       }*/
        // ダンチヒ系
        else if (/Danzig|デインヒル/.test(ped_list)) {  
            myself.classList.add("Danzig");
            myself.setAttribute("title", "ダンチヒ系\n(ノーザンダンサー系)");

        }
        // サドラーズウェルズ系(ダート)
        else if (/El Plado|Medaglia d’Oro/.test(ped_list)) {
            myself.classList.add("SadlersD");
            myself.setAttribute("title", "サドラーズウェルズ系(ダートっぽい)\n(ノーザンダンサー系)");

        }
        // サドラーズウェルズ系
        else if (/Galileo|Montjeu|Sadler’s Wells/.test(ped_list)) {
            myself.classList.add("SadlersWells");
            myself.setAttribute("title", "サドラーズウェルズ系\n(ノーザンダンサー系)");

        }
        // ヌレイエフ系(ダート)
        else if (/ファスリエフ|ストラヴィンスキー/.test(ped_list)) {
            myself.classList.add("NureyevD");
            myself.setAttribute("title", "ヌレイエフ系（ダートっぽい）\n(ノーザンダンサー系)");

        }
        // ヌレイエフ系
        else if (/Nureyev/.test(ped_list)) {
            myself.classList.add("Nureyev");
            myself.setAttribute("title", "ヌレイエフ系\n(ノーザンダンサー系)");

        }
        // リファール系
        else if (/Lyphard/.test(ped_list)) {
            myself.classList.add("Lyphard");
            myself.setAttribute("title", "リファール系\n(ノーザンダンサー系)");

        }
        // ニジンスキー系
        else if (/Caerleon|Caerleon|マルゼンスキー|Nijinsky/.test(ped_list)) {
            myself.classList.add("Nijinsky");
            myself.setAttribute("title", "ニジンスキー系\n(ノーザンダンサー系)");

        }
        //      ノーザンダンサー系
        else if (/メジロライアン|ラストタイクーン|アンバーシャダイ|トライマイベスト|L\Emigrant|ノーザンテースト|The Minstrel|Northern Dancer|Northern Dancer/.test(ped_list)) {
            myself.classList.add("N-Dancer");
            myself.setAttribute("title", "ノーザンダンサー系");

        }
        //          ニアークティック系
        else if (/Nearctic/.test(ped_list)) {
            myself.classList.add("Nearctic");
            myself.setAttribute("title", "ニアークティック系");

        }

        //*************************************************** ナスルーラ系 **********************************************************/

        // グレイソブリン系
        else if (/リードワンダー|アローエクスプレス|スパニッシュエクスプレス|Sovereign Path|トニービン|Kalamoun|フォルティノ|Fortino|Caro|Grey Sovereign/.test(ped_list)) {
            myself.classList.add("G-Sov");
            myself.setAttribute("title", "グレイソヴリン系\n(ナスルーラ系)");

        }
        // ネヴァーベンド系
        else if (/パラダイスクリーク|Irish River|Riverman|Shirley Heights|Darshaan|Shirley Heights|Mill Reef|Never Bend/.test(ped_list)) {
            myself.classList.add("NeverBend");
            myself.setAttribute("title", "ネヴァーベンド系\n(ナスルーラ系)");

        }
        // レッドゴッド系
        else if (/Rainbow Quest|Blushing Groom|Red God/.test(ped_list)) {
            myself.classList.add(RedGod);
            myself.setAttribute("title", "レッドゴッド系\n(ナスルーラ系)");

        }
        // ボールドルーラー系
        else if (/Buena Shore|Cannonade|Bold Bidder|George Lewis|Envoy|Bold Ruler|Boldnesian|Secretariat|Seattle Slew|What a Pleasure/.test(ped_list)) {
            myself.classList.add("BoldRuler");
            myself.setAttribute("title", "ボールドルーラー系\n(ナスルーラ系)");

        }
        // プリンスリーギフト系
        else if (/Noir Et Or|Noir Et Or|ラインゴールド|ファバージ|カツラギエース|ボイズィーボーイ|King’s Troop|Princely Gift/.test(ped_list)) {
            myself.classList.add("P-Gift");
            myself.setAttribute("title", "プリンスリーギフト系\n(ナスルーラ系)");


        }
        //          ナスルーラ系
        else if (/Flying Paster|Flying Paster|Gummo|Fleet Nasrullah|Star de Naskra|Star de Naskra|Naskra|Nasram|Ahmad|Good manners|Nashua|Nasrullah/.test(ped_list)) {
            myself.classList.add("Nasrullah");
            myself.setAttribute("title", "ナスルーラ系");

        }

        //              ネアルコ系
        else if (/Mariache|Dancing Moss|Ballymoss|High Top|Derring-Do|Dante|Nearco/.test(ped_list)) {
            myself.classList.add("Nearco");
            myself.setAttribute("title", "ネアルコ系");

        }
        //                  ファロス系
        else if (/Pharos/.test(ped_list)) {
            myself.classList.add("Pharos");
            myself.setAttribute("title", "ファロス系");

        }

        //*********************************************************************** ファラリス系 ***********************************************************/

        //******************************** バックパサー～トムフール系 ***********************/

        //              
        else if (/Buckpasser/.test(ped_list)) {
            myself.classList.add("Buckpasser");
            myself.setAttribute("title", "バックパサー系");

        }
        else if (/Tom Fool/.test(ped_list)) {
            myself.classList.add("TomFool");
            myself.setAttribute("title", "トムフール系");

        }

        //******************************** フェアトライアル～フェアウェイ系 ***********************/

        else if (/Lord at War|Lord at War|General|Brigadier Gerad|Queen’s Hussar|March Past,Ela-Mana-Mou|Ela-Mana-Mou|ピットカーン|Petingo|Petition|Vain|Wilkes|Fair Trial/.test(ped_list)) {
            myself.classList.add("FairTrial");
            myself.setAttribute("title", "フェアトライアル系");

        }
        else if (/Classic Go Go|Pago Pago|Matrice|Fairway/.test(ped_list)) {
            myself.classList.add("Fairway");
            myself.setAttribute("title", "フェアウェイ系");

        }

        //******************************** ミスプロ～ネイティヴダンサー～ファラリス系 ***********************/

        // キングマンボ系
        else if (/Kingmambo/.test(ped_list)) {
            myself.classList.add("Kingmambo");
            myself.setAttribute("title", "キングマンボ系\n(ミスタープロスペクター系)");

        }
        // フォーティナイナー系
        else if (/フォーティナイナー|Forty Niner/.test(ped_list)) {
            myself.classList.add("FortyNiner");
            myself.setAttribute("title", "フォーティナイナー系\n(ミスタープロスペクター系)");

        }
        // マキャベリアン系
        else if (/Machiavellian/.test(ped_list)) {
            myself.classList.add("Machiavellian");
            myself.setAttribute("title", "マキャベリアン系\n(ミスタープロスペクター系)");

        }
        // アンブライドルド系
        else if (/Unbridled/.test(ped_list)) {
            myself.classList.add("Unbridled");
            myself.setAttribute("title", "アンブライドルド系\n(ミスタープロスペクター系)");

        }
        // シーキングザゴールド系
        else if (/Seeking the Gold/.test(ped_list)) {
            myself.classList.add("SeekingtheGold");
            myself.setAttribute("title", "シーキングザゴールド系\n(ミスタープロスペクター系)");

        }
        // ゴーンウェスト系
        else if (/Gone West/.test(ped_list)) {
            myself.classList.add("GoneWest");
            myself.setAttribute("title", "ゴーンウェスト系");

        }
        //      ミスタープロスペクター系
        else if (/Mr. Prospector|Mr. Prospector/.test(ped_list)) {
            myself.classList.add("Mr-P");
            myself.setAttribute("title", "ミスタープロスペクター系");

        }
        //              レイズアネイティヴ系
        else if (/ Wavering Monarch|Majestic Light|Majestic Prince|Alydar|Affirmed|Exclusive Native|Raise a Native/.test(ped_list)) {
            myself.classList.add("Raise-a-Native");
            myself.setAttribute("title", "レイズアネイティヴ系");

        }
        //                  ネイティヴダンサー系
        else if (/Kris|Kris|エタン|Sharpen Up|Bering|Sea-Bird|Native Dancer/.test(ped_list)) {
            myself.classList.add("Native-D");
            myself.setAttribute("title", "ネイティヴダンサー系");

        }
        //                      ファラリス系
        else if (/Menow|Pharamond|Phalaris/.test(ped_list)) {
            myself.classList.add("Phalaris");
            myself.setAttribute("title", "ファラリス系");

        }

        //****************************** ダマスカス～テディ系 *********************************/

        // ダマスカス系
        else if (/Damascus/.test(ped_list)) {
            myself.classList.add("Damascus");
            myself.setAttribute("title", "ダマスカス系");

        }
        //      テディ系
        else if (/Argument|Kautokeino|Relko|Tanerko|Tantieme|Deux Pour Cent|Deiri|Aethelstan|Bull Dog|Teddy/.test(ped_list)) {
            myself.classList.add("Teddy");
            myself.setAttribute("title", "テディ系");

        }

        //****************************** ブレニム～ブランドフォード系 *********************************/

        else if (/Busted|Crepello|Donatello|Blenheim/.test(ped_list)) {
            myself.classList.add("Blenheim");
            myself.setAttribute("title", "ブレニム系");

        }
        else if (/Monsun|Konigstuhl|Dschingis Khan|Tamerlane|Persian Gulf|Bahram|Blandford/.test(ped_list)) {
            myself.classList.add("Blandford");
            myself.setAttribute("title", "ブランドフォード系");

        }

        //****************************** ファイントップ系～ハンプトン系～ヒムヤー系～タッチストン系 *********************************/

        else if (/Mo Exception|Hard Work|Golden Ruler|King of the Tudors|Forli|Aristophanes|African Sky|Sing Sing|Tudor Minstrel|Owen Tuder|Vaguely Noble|ヴィエナ|Aureole|Hyperion/.test(ped_list)) {
            myself.classList.add("Hyperion");
            myself.setAttribute("title", "ハイペリオン系");

        }
        else if (/ サッカーボーイ|ディクタス|ディクタス/.test(ped_list)) {
            myself.classList.add("FineTop");
            myself.setAttribute("title", "ファイントップ系");

        }
        else if (/プラティニ|Surumu|Literat|Birkhahn|Alchimist|Herold|Vigors|Grey Dawn|Herbager|Vandale|plassy|Bosworth|Son-in-Law|Dark Ronald|Bay Ronald/.test(ped_list)) {
            myself.classList.add("Hampton");
            myself.setAttribute("title", "ハンプトン系");

        }
        else if (/Broad Brush|Ack Ack|Great Above|Battle Joined|Armageddon|Himyar/.test(ped_list)) {
            myself.classList.add("Himyar");
            myself.setAttribute("title", "ヒムヤー系");

        }

        //****************************** リボー～セントサイモン系 *********************************/

        else if (/Ribot|Key to the Mint|Graustark|Law Society|Alleged|Hoist the FLag|Tom Rolfe/.test(ped_list)) {
            myself.classList.add("Ribot");
            myself.setAttribute("title", "リボー系");

        }
        else if (/St Simon|Prince Bio|Persimmon|Prince Palatine|Rose Prince|Prince Rose|Princequillo|Round Table|シンザン/.test(ped_list)) {
            myself.classList.add("St-Simon");
            myself.setAttribute("title", "セントサイモン系");

        }

        //****************************** レリック～マッチェム系 *********************************/

        else if (/Known Fact|In Reality|Known Fact|In Reality|Inetentionally|Intent|Relic|War Relic/.test(ped_list)) {
            myself.classList.add("Matchem");
            myself.setAttribute("title", "マッチェム系");

        }

        //****************************** マイバブー系～ヘロド系 *********************************/

        else if (/メジロマックイーン|シンボリルドルフ|パーソロン|パーソロン|My Babu,Crozier/.test(ped_list)) {
            myself.classList.add("MyBabu");
            myself.setAttribute("title", "マイバブー系");

        }
        else if (/トウショウフリート|トウショウペガサス|ダンディルート|Luthier|Lorenzaccio|Klairon|Clarion/.test(ped_list)) {
            myself.classList.add("Clarion");
            myself.setAttribute("title", "クラリオン系");

        }
        else if (/Practicante|Pronto|Timor|Herod/.test(ped_list)) {
            myself.classList.add("Herod");
            myself.setAttribute("title", "ヘロド系");

        }
    }
};
test('m1', 4);
test('fm2', 3);
test('ffm3', 2);
