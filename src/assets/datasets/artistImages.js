const artistImageData = [
  {name: 'Radiohead', link: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/RadioheadMontreal170718-54_%2843600514571%29.jpg'},
  {name: 'David Bowie', link: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/David_Bowie_-_TopPop_1974_10.png'},
  {name: 'Kanye West', link: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Kanye_West_Lollapalooza_Chile_2011_2.jpg'},
  {name: 'Drake', link: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Drake_Summer_Sixteen_Tour.jpg'},
  {name: 'The Beatles', link: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Beatles_ad_1965_just_the_beatles_crop.jpg'},
  {name: 'The Weeknd', link: 'https://upload.wikimedia.org/wikipedia/commons/4/46/The_Weeknd_2015.jpg'},
  {name: 'Kendrick Lamar', link: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Kendrick_Lamar_Damn.jpg'},
  {name: 'Fleetwood Mac', link: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Fleetwood_Mac_%281977%29.jpg'},
  {name: 'Queen', link: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Queen_sheratonhotel_bsas.jpg'},
  {name: 'Weezer', link: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Weezer_2005.jpg'},
  {name: 'Daft Punk', link: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Daftpunklapremiere2010.jpg'},
  {name: 'Ariana Grande', link: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/ArianaGrandeDecember2013_ohne_Hintergrund.jpg'},
  {name: 'Lana Del Rey', link: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Lana_Del_Rey_%40_Plaza.jpg'},
  {name: 'Bon Iver', link: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Flickr_-_moses_namkung_-_Bon_Iver_2.jpg'},
  {name: 'Selena Gomez', link: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Selena_Gomez_-_Walmart_Soundcheck_Concert.jpg'},
  {name: 'Post Malone', link: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Post_Malone_%2828688643251%29.jpg'},
  {name: 'Justin Bieber', link: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Justin_Bieber_in_2015.jpg'},
  {name: 'Sia', link: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Sia_at_Seattle.jpg'},
  {name: 'Ellie Goulding', link: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Ellie_Goulding_at_Manchester_Academy_2012_-_Portrait.jpg'},
  {name: 'Shawn Mendes', link: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Shawn_Mendes_Live_in_Concert.jpg'},
  {name: 'Years & Years', link: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Years_%26_Years%2C_Shepherds_Bush_Empire%2C_London_%2818582288033%29.jpg'},
  {name: 'Charlie Puth', link: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Charlie_Puth_2016_cropped.jpg'},
  {name: 'Red Hot Chili Peppers', link: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Red_Hot_Chili_Peppers_at_Ohana2019-272_%2849678536373%29.jpg'},
  {name: 'Coldplay', link: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Coldplay_-_The_Rose_Bowl_-_Friday_6th_October_2017_ColdplayRoseBowl061017-20_%2837648580426%29.jpg'},
  {name: 'Adele', link: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Adele_%27Adele_Live_2016%27_-_Nashville_DSC04670_%2829780291344%29.jpg'},
  {name: 'Metallica', link: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/James_Hetfield_with_Metallica_--_7_October_2004.jpg'},
  {name: 'Imagine Dragons', link: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Imagine_Dragons%2C_Roundhouse%2C_London_%2835390234536%29.jpg'},
  {name: 'Maroon 5', link: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Maroon_5_2016.jpg'},
  {name: 'Linkin Park', link: 'https://upload.wikimedia.org/wikipedia/commons/4/42/LinkinParkBerlin2010.jpg'},
  {name: 'Ed Sheeran', link: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Ed_Sheeran%2C_V_Festival_2014%2C_Chelmsford_%2814972247001%29.jpg'},
  {name: 'Pink Floyd', link: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/The_Pink_Floyd_Show_UK.jpg'},
  {name: 'The xx', link: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/The_xx_Dec._2_09.jpg'},
  {name: 'Nirvana', link: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/EMP_Museum_-_Nirvana_%2815632798960%29.jpg'},
  {name: 'Katy Perry', link: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Katy_Perry_13%2C_2012.jpg'},
  {name: 'Arctic Monkeys', link: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Arctic_Monkeys.jpg'},
  {name: 'Muse', link: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Muse_2006_001.jpg'},
  {name: 'Rihanna', link: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Rihanna_-_Live_in_Paris_%284%29.jpg'},
  {name: 'Tame Impala', link: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Tame_Impala-3760_%2818222291464%29.jpg'},
  {name: 'Lady Gaga', link: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Lady_Gaga%2C_ARTPOP_Ball_Tour%2C_Bell_Center%2C_Montr%C3%A9al%2C_2_July_2014_%2859%29_%2814563277555%29.jpg'},
  {name: 'Beyoncé', link: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Beyonce_B%C3%A9lgica.jpg'},
  {name: 'Calvin Harris', link: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Calvin_Harris_-_Rock_in_Rio_Madrid_2012_-_12.jpg'},
  {name: 'Michael Jackson', link: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Michael_Jackson_in_1988.jpg'},
  {name: 'The Rolling Stones', link: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/The-Rolling-Stones-in-Helsinki-1970.jpg'},
  {name: 'Gustavo Cerati', link: 'https://upload.wikimedia.org/wikipedia/commons/6/66/GUSTAVO_CERATI.jpg'},
  {name: 'Soda Stereo', link: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Soda_Stereo_Circa_1984.jpg'},
  {name: 'Led Zeppelin', link: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Led_Zeppelin_acoustic_1973.jpg'},
  {name: 'Madonna', link: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Madonna_Rebel_Heart_Tour_2015_-_Stockholm_%2823051472299%29_%28cropped%29.jpg'},
  {name: 'Major Lazer', link: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Major_Lazer_Im_Park_2016_%285_von_15%29.jpg'},
  {name: 'The Chainsmokers', link: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/The_Chainsmokers_VELD_2016.jpg'},
  {name: 'Marvin Gaye', link: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Marvin_Gaye_%281973_publicity_photo%29.jpg'},
  {name: 'Pitbull', link: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Pitbull%2C_2012.jpg'},
  {name: 'Foo Fighters', link: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Foo_Fighters_-_Southside_Festival_2019_4184_-_1.jpg'},
  {name: 'Eminem', link: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Eminem-01-mika.jpg'},
  {name: 'Massive Attack', link: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Massive_Attack_%40_Conegliano_17.jpg'},
  {name: 'Childish Gambino', link: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Childish_Gambino-Bowery_Ballroom-1.jpg'},
  {name: 'Britney Spears', link: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Britney_Spears_performing%2C_Las_Vegas%2C_January_29%2C_2014.jpg'},
  {name: 'Prince', link: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Levi_%26_Prince.jpg'},
  {name: 'OutKast', link: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/OutKast_Andre_3000_Big_Boi_Performing_Shankbone_2014.jpg'},
  {name: 'Depeche Mode', link: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Wetten_dass_20130323_6660.jpg'},
  {name: 'Nine Inch Nails', link: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Nine_Inch_Nails_Moline_02.jpg'},
  {name: 'Bob Dylan', link: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Bob_Dylan_in_Toronto2.jpg'},
  {name: 'John Mayer', link: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/John_Mayer_%28352582868%29.jpg'},
  {name: 'Stevie Wonder', link: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Stevie_Wonder_1973.JPG'},
  {name: 'Elvis Presley', link: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Elvis_Presley_1958.jpg'},
  {name: 'Frank Sinatra', link: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Frank_Sinatra_by_Gottlieb_c1947-_2.jpg'},
  {name: 'Nat King Cole', link: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Nat_King_Cole_%28Gottlieb_01511%29.jpg'},
  {name: 'Paramore', link: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Paramore_-_Royal_Albert_Hall_-_Monday_19th_June_2017_ParamoreRAH190617-47_%2834879654293%29.jpg'},
  {name: 'Green Day', link: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Green_Day_House_Of_Blues_Cleveland_2015.jpg'},
  {name: 'Arcade Fire', link: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Arcade_Fire_13.jpg'},
  {name: 'Lorde', link: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Lorde_%2815156802266%29.jpg'},
  {name: 'The Black Keys', link: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/The_Black_Keys_at_MSG_3-22-12.jpg'},
  {name: 'Twenty One Pilots', link: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Twenty_One_Pilots%2C_Shepherds_Bush_Empire%2C_London_%2822428162698%29.jpg'},
  {name: 'Nicki Minaj', link: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Nicki_Minaj_Realize_2017_NBA_Awards_Tour.png'},
  {name: 'David Guetta', link: 'https://upload.wikimedia.org/wikipedia/commons/a/af/David_Guetta_5%2C_2012.jpg'},
  {name: 'Sam Smith', link: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Sam_Smith_Lollapalooza_2015-3.jpg'},
  {name: 'Taylor Swift', link: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Taylor_Swift_Reputation_Tour1.jpg'},
  {name: 'BTS', link: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/BTS_performing_%22DNA%22_during_Love_Yourself_tour_in_Los_Angeles%2C_8_September_2018_01.jpg'},
  {name: 'The Strokes', link: 'https://upload.wikimedia.org/wikipedia/commons/6/65/The_Strokes_by_Roger_Woolman.jpg'},
  {name: 'Phil Collins', link: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Phil_Collins_Mama.jpg'},
  {name: 'Mary J. Blige', link: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Mary_J._Blige_in_2009.JPG'},
  {name: 'Alicia Keys', link: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Alicia_Keys_live_Walmart.jpg'},
  {name: 'Erykah Badu', link: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Erykah_Badu_2008.07.14_001.jpg'},
  {name: 'Gorillaz', link: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Gorillaz%2C_Brixton_Academy%2C_London_%2834342295764%29.jpg'},
  {name: 'Unheilig', link: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Unser_Song_f%C3%BCr_D%C3%A4nemark_-_Sendung_-_Unheilig-2747.jpg'},
  {name: 'The Cure', link: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/The_Cure_2013.jpg'},
  {name: 'The National', link: 'https://upload.wikimedia.org/wikipedia/commons/3/38/The_National_playing_%27Bloodbuzz_Ohio%27_at_Down_The_Rabbit_Hole_2016.jpg'},
  {name: 'Sufjan Stevens', link: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Sufjan_Stevens%2C_August_2011.jpg'},
  {name: 'Blur', link: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Provinssirock_20130614_-_Blur_-_23.jpg'},
  {name: 'Frank Ocean', link: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Frank_Ocean_Coachella_2012_3.jpg'},
  {name: 'Justin Timberlake', link: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Justin_Timberlake%2C_V_Festival_2014%2C_Chelmsford_%2814788765807%29.jpg'},
  {name: 'U2', link: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/U2_in_Manila_214629.jpg'},
  {name: 'The Killers', link: 'https://upload.wikimedia.org/wikipedia/commons/2/28/KillersBrixton120917-24.jpg'},
  {name: 'Fall Out Boy', link: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Fall_out_Boy_Monumentour.jpg'},
  {name: 'Rammstein', link: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Rammstein_-_02.jpg'},
  {name: 'Queens of the Stone Age', link: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Queens_of_the_Stone_Age_-_SSE_Arena_Wembley_-_Saturday_18th_November_2017_QOTSAWembley181117-3_%2838546196746%29.jpg'},
  {name: 'Guns N\' Roses', link: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Guns_N_Roses_Zagreb_240910_2.jpg'},
  {name: 'R.E.M.', link: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/R.E.M._in_2008_at_the_Albert_Hall.jpg'},
  {name: 'Tracy Chapman', link: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Tracy_Chapman_1.jpg'},
  {name: 'Bob Marley & The Wailers', link: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Bob-Marley_3.jpg'},
  {name: 'The Clash', link: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Clash_21051980_12_800.jpg'},
  {name: 'James Brown', link: 'https://upload.wikimedia.org/wikipedia/commons/7/74/James-Brown_1973.jpg'},
  {name: 'Jain', link: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Jain_-_Pal%C3%A9o_2016.jpg'},
  {name: 'Kings of Leon', link: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Kings_Of_Leon_-_Sheffield_Arena_-_Saturday_10th_June_2017_KOLSheffield100617-16_%2834447728923%29.jpg'},
  {name: 'Amy Winehouse', link: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Amy_Winehouse_Kidney_2008.jpg'},
  {name: 'Kygo', link: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/98.5_KYGO%27s_Christmas_Jam_%2827469237649%29.jpg'},
  {name: 'alt-J', link: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Alt-J_%40_Bonnaroo_2018.jpg'},
  {name: 'Bruno Mars', link: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Bruno_Mars_Concert_Houston_2.jpg'},
  {name: 'Hans Zimmer', link: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Hans_Zimmer_%E2%80%93_Z%C3%A9nith_Nantes_%E2%80%93_2016-06-02_%282%29.jpg'},
  {name: 'Jay-Z', link: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Jay-Z.jpg'},
  {name: 'Sarkodie', link: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sarkodie-1.jpg'},
  {name: 'Demi Lovato', link: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Demi_Lovato_5_%2840988741730%29.jpg'},
  {name: 'Chris Brown', link: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Chris_Brown_5%2C_2012.jpg'},
  {name: 'Whitney Houston', link: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Flickr_Whitney_Houston_performing_on_GMA_2009_6.jpg'},
  {name: 'Shakira', link: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Shakira_-_2011_Singapore_Grand_Prix_%289%29.jpg'},
  {name: 'Cardi B', link: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Cardi_B_-_Openair_Frauenfeld_2019_08.jpg'},
  {name: 'Flo Rida', link: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Flo_Rida_B96_SummerBash_2012-06-16_6418_photo_by_Adam_Bielawski.jpg'},
  {name: 'Chance the Rapper', link: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Chance_the_Rapper_Red_Rocks_05.02.17_%2834440274685%29.jpg'},
  {name: 'Damian Marley', link: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Damian-Marley.jpg'},
  {name: 'Jack Johnson', link: 'https://upload.wikimedia.org/wikipedia/commons/1/18/JackJohnson_20130615.jpg'},
  {name: 'Sigur Rós', link: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Sigur_Ros_concert.JPG'},
  {name: 'A.R. Rahman', link: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/A._R._Rahman_recording_with_Le_Trio_Joubran.jpg'},
  {name: 'Oasis', link: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Oasis_Liam_and_Noel.jpg'},
  {name: 'Perfume', link: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Perfume_performing_Polyrhythm_during_4th_Tour_in_Dome_LEVEL3.JPG'},
  {name: 'ASIAN KUNG-FU GENERATION', link: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Asian_Kung_Fu_Generation_Anime_Friends_2017_2_%28cropped%29.jpg'},
  {name: 'The Prodigy', link: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Parkenfestivalen_2012_The_Prodigy.jpg'},
  {name: 'System of a Down', link: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Pinkpop_2017_-_System_of_a_Down.jpg'},
  {name: 'Marilyn Manson', link: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Marilyn_Manson_Live_in_Roma_25_july_2017-_20.jpg'},
  {name: 'Avril Lavigne', link: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Avril_Lavigne_in_China.jpg'},
  {name: 'Wolfgang Amadeus Mozart', link: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Wolfgang_Amadeus_Mozart.png'},
  {name: 'Three Days Grace', link: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Three_Days_Grace_Rock_am_Ring_2015_%2817%29.JPG'},
  {name: 'Owl City', link: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Owl_City_930_club.jpg'},
  {name: 'Aerosmith', link: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Aerosmith_B.jpg'},
  {name: 'Nick Cave & The Bad Seeds', link: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Nick_Cave_and_the_bad_seeds_live_%40_Paladozza_%2811174862314%29.jpg'},
  {name: 'The Supremes', link: 'https://upload.wikimedia.org/wikipedia/commons/5/58/1966_The_Supremes.JPG'},
  {name: 'Beirut', link: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Beirut3.jpg'},
  {name: 'PJ Harvey', link: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/PJ_Harvey.jpg'},
  {name: 'Future', link: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Future_Honest_Tour_%40_Sound_Academy_Toronto_July_11%2C2014.jpg'},
  {name: 'Joey Bada$$', link: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Joey_Badass_performing_at_Hovefestivalen_2013.jpg'},
  {name: 'Zayn', link: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/ZaynWWATchile.jpg'},
  {name: 'Ciara', link: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Ciara_Live_2.jpg'},
  {name: 'Café Tacvba', link: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Cafe_Tacvba_%40_Lollapalooza_2014_%2813658283214%29.jpg'},
  {name: 'Passenger', link: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Passenger%2C_Hammersmith_Apollo%2C_London_%2816007177806%29.jpg'},
  {name: 'Aphex Twin', link: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Aphex_Twin.jpg'},
  {name: 'Moby', link: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Alskfdvhaeirghmie_rgaerg26849849df8ga.jpg'},
  {name: 'Aretha Franklin', link: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Aretha_Franklin.png'},
  {name: 'Florence + the Machine', link: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Florence_and_the_Machine-3.jpg'},
  {name: 'Wizkid', link: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Wizkid_at_Iyanya%27s_album_launch_concert%2C_2013_%28Cropped%29.png'},
  {name: 'A$AP Rocky', link: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/A%24AP_Rocky_-_Under_the_Influence_Tour_2013_Toronto.jpg'},
  {name: 'Fetty Wap', link: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Fetty_Wap_.jpg'},
  {name: 'Elton John', link: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Elton_John_US_Television_Special_1974.JPG'},
  {name: 'The Who', link: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/The_Who_in_1965.png'},
  {name: 'The Beach Boys', link: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Sullivan_Beach_Boys_%28cropped%29.jpg'},
  {name: 'Placebo', link: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/PlaceboBologna2009.jpg'},
  {name: 'Björk', link: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Bj%C3%B6rk_-_Hurricane_Festival.jpg'},
  {name: 'Modest Mouse', link: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Modest_Mouse_%40_Esplande_Park_%2823_7_2011%29_%285993005117%29.jpg'},
  {name: 'The Kooks', link: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/The_Kooks_%2882616255%29.jpeg'},
  {name: 'Dua Lipa', link: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Dua_Lipa_02_08_2018_-73_%2840754685741%29.jpg'},
  {name: 'R. Kelly', link: 'https://upload.wikimedia.org/wikipedia/commons/4/46/R._Kelly_mug_shot.jpg'},
  {name: 'Miley Cyrus', link: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Miley_Cyrus_Primavera19_-241_%2848985545863%29.jpg'},
  {name: 'Anathema', link: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Anathema-03.jpg'},
  {name: 'Miles Davis', link: 'https://upload.wikimedia.org/wikipedia/commons/8/88/MilesDavisNorthSeaJazz1984.jpg'},
  {name: 'Mika', link: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Mika_%28Chanteur%29.jpg'},
  {name: 'Nina Simone', link: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/De_Amerikaanse_zangeres_Nina_Simone_die_met_kerst_op_televisie_zal_verschijnen%2C_Bestanddeelnr_918-5602.jpg'},
  {name: 'Tom Petty and The Heartbreakers', link: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Tom_Petty_and_the_Heartbreakers_1977.jpg'},
  {name: 'OneRepublic', link: 'https://upload.wikimedia.org/wikipedia/commons/4/45/OneRepublic_20130413_064.JPG'},
  {name: 'Noize MC', link: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Noize_MC_2020_%281%29.jpg'},
  {name: 'Tool', link: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Tool_live_barcelona_2006.jpg'},
  {name: 'CHVRCHES', link: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Chvrches_09_23_2018_-26_%2831780733877%29.jpg'},
  {name: 'Carly Rae Jepsen', link: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Carly_Rae_Jepsen_Primavera19_-159_%2848985538298%29.jpg'},
  {name: 'Iron & Wine', link: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Iron%26Wine2015.png'},
  {name: '', link: ''},
  {name: '', link: ''},
]

export default artistImageData;