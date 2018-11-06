// jquery を使ったバージョン

// 年と年の境目は下線を太くする
 $(".date").each(function(i, e){
    var thisyear = $(e);
    if ( $("td",thisyear.parent().nextAll()).eq(thisyear.index()).length ) {
        var nextyear = $("td", thisyear.parent().nextAll()).eq(thisyear.index());
        if (thisyear.text() !== nextyear.text()) {
            thisyear.parent().addClass("rowBottom")
        }
    }
 });
$("#race_results").find("tr").filter(":last").addClass("rowBottom")

// 枠順に色付け
function gate_color(name) {
    $(name).each(function(i, e) {
        let gate_num = $(e).text();
        if (gate_num=='1') {
            $(e).addClass('gate1');
        }
        else if (gate_num=='2') {
            $(e).addClass('gate2');
        }
        else if (gate_num=='3') {
            $(e).addClass('gate3');
        } 
        else if (gate_num=='4') {
            $(e).addClass('gate4');
        } 
        else if (gate_num=='5') {
            $(e).addClass('gate5');
        } 
        else if (gate_num=='6') {
            $(e).addClass('gate6');
        } 
        else if (gate_num=='7') {
            $(e).addClass('gate7');
        } 
        else if (gate_num=='8') {
            $(e).addClass('gate8');
        }
    });
};
gate_color('.gate');

// 数値が 0 か 0.0 の場合、-(ハイフン) に書き換え
function hyphen(name) {
    $(name).each(function(i, e) {
        if ($(e).text()=='0.0' || $(e).text()=='0' ){
            $(e).text('-');
        }
    });
};
hyphen('.l3fl');
hyphen('.rank');

// 順位１～３位に色付け
function rank_color(name) {
    $(name).each(function(i, e) {
        if ($(e).text()=='1') {
            $(e).addClass('rank1');
        } 
        else if ($(e).text()=='2') {
            $(e).addClass('rank2');
        } 
        else if ($(e).text()=='3') {
            $(e).addClass('rank3');
        }
    });
};
rank_color('.fin');
rank_color('.zfin');
rank_color('.l3fl');
rank_color('.rank');

// ５番人気以下は赤くする
function pop_color(name) {
    $(name).each(function(i, e) {
        if ($(e).text() > 4) {
            $(e).addClass('unpop');
        }
    });
};
pop_color('.pop');

// 上がり３ハロン順位に応じて、上がり３ハロンタイムにも色付け
// 右隣の数字によってClassが決まる
$('.l3fl').each(function(i, e) {
    rank = $(e).next().text();
    if (rank=='1') {
        $(e).addClass('rank1');
    } 
    else if (rank=='2') {
        $(e).addClass('rank2');
    } 
    else if (rank=='3') {
        $(e).addClass('rank3');
    }
});

// 馬名取得
function horse_name(name) {
    var horse_data = document.getElementsByClassName(name);
    for (i = 0; i < horse_data.length; i++) {
        var horse_name = horse_data[i];
        console.log(horse_name);
    }
};
horse_name('h_name');
// 種牡馬の色分け


function pedigree_color(name, next) {
    $(name).each(function(i, e){
        var myself = $(e),
            myname = $(e).text();
        myself.nextUntil(next).each(function(i, f){
            var ancestor = $(f).text();
            console.log(myname);
            console.log(ancestor);

            /*************************************************** ターントゥ系 ********************************************/
            // サンデー系（母父トニービン）
            if (myname=='ハーツクライ' || myname=='リンカーン' || myname=='サムライハート' || ancestor=='ハーツクライ' ) {
                myself.addClass('SundayTB');
                myself.attr('title', 'サンデー系（母父トニービン）');
                return false;
            }
            // サンデーサイレンス系
            if (myname=='サンデーサイレンス' || myname=='Sunday Silence' || ancestor=='サンデーサイレンス' || ancestor=='Sunday Silence' ) {
                myself.addClass('SundayS');
                myself.attr('title', 'サンデーサイレンス系');
                return false;
            }
            //      ヘイロー系
            else if (myname=='Halo' || ancestor=='Halo') {
                myself.addClass('Halo');
                myself.attr('title', 'ヘイロー系');
                return false;
            }
            //      ロベルト系
            else if (myname=='Roberto' || ancestor=='Roberto') {
                myself.addClass('Roberto');
                myself.attr('title', 'ロベルト系');
                return false;
            }
            //      サーゲイロード系
            else if (ancestor=='ニホンピロウイナー' || ancestor=='スティールハート' || ancestor=='Marauding' || ancestor=='Sir Tristram' || ancestor=='Sir Ivor' ||  ancestor=='Habitat' || ancestor=='Sir Gaylord') {
                myself.addClass('Sir-Gaylord');
                myself.attr('title', 'サーゲイロード系')
                return false;
            }
            //          ターントゥ系
            else if (ancestor=='Hail to Reason' || ancestor=='Turn-to') {
                myself.addClass('Turn-to');
                myself.attr('title', 'ターントゥ系');
                return false;
            }
            //              ロイヤルチャージャー系
            else if (ancestor=='Royal Charger' || ancestor=='ロイヤルチャレンヂャー') {
                myself.addClass('RoyalCharger');
                myself.attr('title', 'ロイヤルチャージャー系')
            }
            /************************************ ノーザンダンサー系 ～ ニアークティック系 ********************************/
            // アイスカペイド系
            else if (ancestor=='Wild Again' || ancestor=='Icecapade') {
                myself.addClass('Icecapade');
                myself.attr('title', 'アイスカペイド系\n(ニアークティック系)');
                return false;
            }
            // ヴァイスリージェント系
            else if (myname=='クロフネ' || ancestor=='フレンチデピュティ' || ancestor=='French Deputy' ||  ancestor=='Deputy Minister' || ancestor=='Vice Regent') {
                myself.addClass('ViceRegent');
                myself.attr('title', 'ヴァイスリージェント系\n(ノーザンダンサー系)');
                return false;
            }
            // ストームバード系
            else if (myname=='Storm Cat' || myname=='Storm Bird'|| ancestor=='Storm Cat' || ancestor=='Storm Bird') {
                myself.addClass('StormBird');
                myself.attr('title', 'ストームバード系\n(ノーザンダンサー系)');
                return false;
            }
            // ノーザンダンサー系(ダート)
            /*else if (ancestor=='') {
                myself.addClass('DND');
                myself.attr('title', 'ノーザンダンサー系（ダート）');
                return false;
            }*/
            // ダンチヒ系
            else if (myname=='デインヒル' || myname=='Danzig' || ancestor=='デインヒル' || ancestor=='Danzig') {  
                myself.addClass('Danzig');
                myself.attr('title', 'ダンチヒ系\n(ノーザンダンサー系)');
                return false;
            }
            // サドラーズウェルズ系(ダート)
            else if (ancestor=='El Plado' || ancestor=='Medaglia d’Oro') {
                myself.addClass('SadlersD');
                myself.attr('title', 'サドラーズウェルズ系(ダートっぽい)\n(ノーザンダンサー系)');
                return false;
            }
            // サドラーズウェルズ系
            else if (ancestor=='Galileo' || ancestor=='Montjeu' || myname=='Sadler’s Wells' || ancestor=='Sadler’s Wells') {
                myself.addClass('SadlersWells');
                myself.attr('title', 'サドラーズウェルズ系\n(ノーザンダンサー系)');
                return false;
            }
            // ヌレイエフ系(ダート)
            else if (ancestor=='ファスリエフ' || ancestor=='ストラヴィンスキー') {
                myself.addClass('NureyevD');
                myself.attr('title', 'ヌレイエフ系（ダートっぽい）\n(ノーザンダンサー系)');
                return false;
            }
            // ヌレイエフ系
            else if (myname=='Nureyev' || ancestor=='Nureyev') {
                myself.addClass('Nureyev');
                myself.attr('title', 'ヌレイエフ系\n(ノーザンダンサー系)');
                return false;
            }
            // リファール系
            else if (myname=='Lyphard' || ancestor=='Lyphard') {
                myself.addClass('Lyphard');
                myself.attr('title', 'リファール系\n(ノーザンダンサー系)');
                return false;
            }
            // ニジンスキー系
            else if (myname=='Caerleon' || ancestor=='Caerleon' || myname=='マルゼンスキー' || ancestor=='マルゼンスキー' || ancestor=='Nijinsky') {
                myself.addClass('Nijinsky');
                myself.attr('title', 'ニジンスキー系\n(ノーザンダンサー系)');
                return false;
            }
            //      ノーザンダンサー系
            else if (myname=='メジロライアン' || myname=='ラストタイクーン' || myname=='アンバーシャダイ' || ancestor=='アンバーシャダイ' || ancestor=='トライマイベスト' || ancestor=='L\'Emigrant' || ancestor=='ノーザンテースト' || ancestor=='The Minstrel' || myname=='Northern Dancer' || ancestor=='Northern Dancer') {
                myself.addClass('N-Dancer');
                myself.attr('title', 'ノーザンダンサー系');
                return false;
            }
            //          ニアークティック系
            else if (ancestor=='Nearctic') {
                myself.addClass('Nearctic');
                myself.attr('title', 'ニアークティック系');
                return false;
            }

            /*************************************************** ナスルーラ系 **********************************************************/

            // グレイソブリン系
            else if (myname=='リードワンダー' || ancestor=='アローエクスプレス' || ancestor=='スパニッシュエクスプレス' || ancestor=='Sovereign Path' || myname=='トニービン' || ancestor=='トニービン' || ancestor=='Kalamoun' || ancestor=='フォルティノ' || ancestor=='Fortino' || ancestor=='Caro' ||  ancestor=='Grey Sovereign') {
                myself.addClass('G-Sov');
                myself.attr('title', 'グレイソヴリン系\n(ナスルーラ系)');
                return false;
            }
            // ネヴァーベンド系
            else if (myname=='パラダイスクリーク' || ancestor=='パラダイスクリーク' || ancestor=='Irish River' || ancestor=='Riverman' || myname=='Darshaan' || myname=='Shirley Heights' || myname=='Mill Reef' || ancestor=='Darshaan' || ancestor=='Shirley Heights' || ancestor=='Mill Reef' || ancestor=='Never Bend') {
                myself.addClass('NeverBend');
                myself.attr('title', 'ネヴァーベンド系\n(ナスルーラ系)');
                return false;
            }
            // レッドゴッド系
            else if (myname=='Rainbow Quest' || ancestor=='Rainbow Quest' || ancestor=='Blushing Groom' || ancestor=='Red God') {
                myself.addClass('RedGod');
                myself.attr('title', 'レッドゴッド系\n(ナスルーラ系)');
                return false;
            }
            // ボールドルーラー系
            else if (myname=='Buena Shore' || ancestor=='Cannonade' || ancestor=='Bold Bidder' || ancestor=='George Lewis' || ancestor=='Envoy' || ancestor=='Bold Ruler' || ancestor=='Boldnesian' || ancestor=='Secretariat' || ancestor=='Seattle Slew'|| ancestor=='What a Pleasure' ) {
                myself.addClass('BoldRuler');
                myself.attr('title', 'ボールドルーラー系\n(ナスルーラ系)');
                return false;
            }
            // プリンスリーギフト系
            else if (myname=='Noir Et Or' || ancestor=='Noir Et Or' || ancestor=='ラインゴールド' || ancestor=='ファバージ' || myname=='カツラギエース' || ancestor=='ボイズィーボーイ' || ancestor=='King’s Troop' || ancestor=='Princely Gift') {
                myself.addClass('P-Gift');
                myself.attr('title', 'プリンスリーギフト系\n(ナスルーラ系)');
                return false;

            }
            //          ナスルーラ系
            else if (myname=='Flying Paster' || ancestor=='Flying Paster' || ancestor=='Gummo' || ancestor=='Fleet Nasrullah' || myname=='Star de Naskra' || ancestor=='Star de Naskra' || ancestor=='Naskra' || ancestor=='Nasram' || ancestor=='Ahmad' || ancestor=='Good manners' || ancestor=='Nashua' || ancestor=='Nasrullah') {
                myself.addClass('Nasrullah');
                myself.attr('title', 'ナスルーラ系');
                return false;
            }

            //              ネアルコ系
            else if (myname=='Mariache' || ancestor=='Dancing Moss' || ancestor=='Ballymoss' || ancestor=='High Top' || ancestor=='Derring-Do' || ancestor=='Dante' || ancestor=='Nearco' ) {
                myself.addClass('Nearco');
                myself.attr('title', 'ネアルコ系');
                return false;
            }
            //                  ファロス系
            else if (ancestor=='Pharos') {
                myself.addClass('Pharos');
                myself.attr('title', 'ファロス系');
                return false;
            }
  
            /*********************************************************************** ファラリス系 ***********************************************************/

            /******************************** バックパサー～トムフール系 ***********************/
            
            //              
            else if (myname=='Buckpasser' || ancestor=='Buckpasser') {
                myself.addClass('Buckpasser');
                myself.attr('title', 'バックパサー系');
            }
            else if (myname=='Tom Fool' || ancestor=='Tom Fool') {
                myself.addClass('TomFool');
                myself.attr('title', 'トムフール系');
            }

            /******************************** フェアトライアル～フェアウェイ系 ***********************/

            else if (myname=='Lord at War' || ancestor=='Lord at War' || ancestor=='General' || ancestor=='Brigadier Gerad' || ancestor=='Queen’s Hussar' || ancestor=='March Past' ||myname=='Ela-Mana-Mou' || ancestor=='Ela-Mana-Mou' || ancestor=='ピットカーン' || ancestor=='Petingo' || ancestor=='Petition' || ancestor=='Vain' || ancestor=='Wilkes' || ancestor=='Fair Trial') {
                myself.addClass('FairTrial');
                myself.addClass('title', 'フェアトライアル系');
            }
            else if (myname=='Classic Go Go' || ancestor=='Classic Go Go' || ancestor=='Pago Pago' || ancestor=='Matrice' || ancestor=='Fairway') {
                myself.addClass('Fairway');
                myself.addClass('title', 'フェアウェイ系');
            }

            /******************************** ミスプロ～ネイティヴダンサー～ファラリス系 ***********************/

            // キングマンボ系
            else if (myname=='Kingmambo' || ancestor=='Kingmambo') {
                myself.addClass('Kingmambo');
                myself.attr('title', 'キングマンボ系\n(ミスタープロスペクター系)');
                return false;
            }
            // フォーティナイナー系
            else if (myname=='フォーティナイナー' || myname=='Forty Niner' || ancestor=='フォーティナイナー' || ancestor=='Forty Niner') {
                myself.addClass('FortyNiner');
                myself.attr('title', 'フォーティナイナー系\n(ミスタープロスペクター系)');
                return false;
            }
            // マキャベリアン系
            else if (myname=='Machiavellian' || ancestor=='Machiavellian') {
                myself.addClass('Machiavellian');
                myself.attr('title', 'マキャベリアン系\n(ミスタープロスペクター系)');
                return false;
            }
            // アンブライドルド系
            else if (myname=='Unbridled' || ancestor=='Unbridled') {
                myself.addClass('Unbridled');
                myself.attr('title', 'アンブライドルド系\n(ミスタープロスペクター系)');
                return false;
            }
            // シーキングザゴールド系
            else if (myname=='Seeking the Gold' || ancestor=='Seeking the Gold') {
                myself.addClass('SeekingtheGold');
                myself.attr('title', 'シーキングザゴールド系\n(ミスタープロスペクター系)');
                return false;
            }
            // ゴーンウェスト系
            else if (myname=='Gone West' || ancestor=='Gone West\n(ミスタープロスペクター系)') {
                myself.addClass('GoneWest');
                myself.attr('title', 'ゴーンウェスト系');
                return false;
            }
            //      ミスタープロスペクター系
            else if (myname=='Mr. Prospector' || ancestor=='Mr. Prospector') {
                myself.addClass('Mr-P');
                myself.attr('title', 'ミスタープロスペクター系');
                return false;
            }
            //              レイズアネイティヴ系
            else if ( ancestor=='Wavering Monarch' || ancestor=='Majestic Light' || ancestor=='Majestic Prince' || ancestor=='Alydar' || ancestor=='Affirmed' || ancestor=='Exclusive Native' || ancestor=='Raise a Native') {
                myself.addClass('Raise-a-Native');
                myself.attr('title', 'レイズアネイティヴ系');
                return false;
            }
            //                  ネイティヴダンサー系
            else if (myname=='Kris' || ancestor=='Kris' || ancestor=='エタン' || ancestor=='Sharpen Up' || ancestor=='Bering' || ancestor=='Sea-Bird' || ancestor=='Native Dancer') {
                myself.addClass('Native-D');
                myself.attr('title', 'ネイティヴダンサー系');
                return false;
            }
            //                      ファラリス系
            else if (ancestor=='Menow' || ancestor=='Pharamond' || ancestor=='Phalaris') {
                myself.addClass('Phalaris');
                myself.attr('title', 'ファラリス系');
                return false;
            }

            /****************************** ダマスカス～テディ系 *********************************/

            // ダマスカス系
            else if (myname=='Damascus' || ancestor=='Damascus') {
                myself.addClass('Damascus');
                myself.attr('title', 'ダマスカス系');
                return false;
            }
            //      テディ系
            else if (ancestor=='Argument' || ancestor=='Kautokeino' || ancestor=='Relko' || ancestor=='Tanerko' || ancestor=='Tantieme' || ancestor=='Deux Pour Cent' || ancestor=='Deiri' || ancestor=='Aethelstan' || ancestor=='Bull Dog' || ancestor=='Teddy') {
                myself.addClass('Teddy');
                myself.attr('title', 'テディ系');
                return false;
            }

            /****************************** ブレニム～ブランドフォード系 *********************************/

            else if (ancestor=='Busted' || ancestor=='Crepello' || ancestor=='Donatello' || ancestor=='Blenheim') {
                myself.addClass('Blenheim');
                myself.attr('title', 'ブレニム系');
                return false;
            }
            else if (ancestor=='Monsun' || ancestor=='Konigstuhl' || ancestor=='Dschingis Khan' || ancestor=='Tamerlane' || ancestor=='Persian Gulf' || ancestor=='Bahram' || ancestor=='Blandford') {
                myself.addClass('Blandford');
                myself.attr('title', 'ブランドフォード系');
                return false;
            }

            /****************************** ファイントップ系～ハンプトン系～ヒムヤー系～タッチストン系 *********************************/

            else if (ancestor=='Mo Exception' || ancestor=='Hard Work' || ancestor=='Golden Ruler' || ancestor=='King of the Tudors' || ancestor=='Forli' || ancestor=='Aristophanes' || ancestor=='African Sky' || ancestor=='Sing Sing' || ancestor=='Tudor Minstrel' || ancestor=='Owen Tuder' || ancestor=='Vaguely Noble' || ancestor=='ヴィエナ' || ancestor=='Aureole' || ancestor=='Hyperion') {
                myself.addClass('Hyperion');
                myself.attr('title', 'ハイペリオン系');
                return false;
            }
            else if ( myname=='サッカーボーイ' || myname=='ディクタス' || ancestor=='ディクタス' ) {
                myself.addClass('FineTop');
                myself.attr('title', 'ファイントップ系');
                return false;
            }
            else if (myname=='プラティニ' || ancestor=='Surumu' || ancestor=='Literat' || ancestor=='Birkhahn' || ancestor=='Alchimist' || ancestor=='Herold' || ancestor=='Vigors' || ancestor=='Grey Dawn' || ancestor=='Herbager' || ancestor=='Vandale' || ancestor=='plassy' || ancestor=='Bosworth' || ancestor=='Son-in-Law' || ancestor=='Dark Ronald' || ancestor=='Bay Ronald' ) {
                myself.addClass('Hampton');
                myself.attr('title', 'ハンプトン系');
                return false;
            }
            else if (ancestor=='Broad Brush' || ancestor=='Ack Ack' || ancestor=='Battle Joined' || ancestor=='Armageddon' || ancestor=='Himyar') {
                myself.addClass('Himyar');
                myself.attr('title', 'ヒムヤー系');
                return false;
            }

            /****************************** リボー～セントサイモン系 *********************************/

            else if (ancestor=='Ribot' || ancestor=='Key to the Mint' || ancestor=='Graustark' || ancestor=='Law Society' || ancestor=='Alleged' || ancestor=='Hoist the FLag' || ancestor=='Tom Rolfe' ) {
                myself.addClass('Ribot');
                myself.attr('title', 'リボー系');
                return false;
            }
            else if (ancestor=='St Simon' || ancestor=='Prince Bio' || ancestor=='Persimmon' || ancestor=='Prince Palatine' || ancestor=='Rose Prince' || ancestor=='Prince Rose' || ancestor=='Princequillo' || ancestor=='Round Table' || ancestor=='シンザン') {
                myself.addClass('St-Simon');
                myself.attr('title', 'セントサイモン系');
                return false;
            }

            /****************************** レリック～マッチェム系 *********************************/

            else if (myname=='Known Fact' || myname=='In Reality' || ancestor=='Known Fact' || ancestor=='In Reality' || ancestor=='Inetentionally' || ancestor=='Intent' || ancestor=='Relic' || ancestor=='War Relic') {
                myself.addClass('Matchem');
                myself.attr('title', 'マッチェム系');
                return false;
            }

            /****************************** マイバブー系～ヘロド系 *********************************/

            else if (ancestor=='メジロマックイーン' || ancestor=='シンボリルドルフ' || myname=='パーソロン' || ancestor=='パーソロン' || ancestor=='My Babu'|| ancestor=='Crozier') {
                myself.addClass('MyBabu');
                myself.attr('title', 'マイバブー系');
                return false;
            }
            else if (myname=='トウショウフリート' || ancestor=='トウショウペガサス' || ancestor=='ダンディルート' || ancestor=='Luthier' || ancestor=='Lorenzaccio' || ancestor=='Klairon' || ancestor=='Clarion' ) {
                myself.addClass('Clarion');
                myself.attr('title', 'クラリオン系');
                return false;
            }
            else if (myname=='Practicante' || ancestor=='Pronto' || ancestor=='Timor' || ancestor=='Herod' ) {
                myself.addClass('Herod');
                myself.attr('title', 'ヘロド系');
                return false;
            }
        });
    });
};
pedigree_color('.m1', '.fm2')
pedigree_color('.fm2', 'ffm3')
pedigree_color('.ffm3', '.zdate')
