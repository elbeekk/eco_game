'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "54e0c8c06789994bbb0b39021caafa57",
"assets/AssetManifest.bin.json": "279ac7b8b3b6fea375b6d9df61e49e22",
"assets/AssetManifest.json": "818372c44f445dd1780e11481d8f56bd",
"assets/assets/audio/loop.mp3": "715ffaffad31c849b26d50fe166e2931",
"assets/assets/images/game_assets/buildings/consumers/factory.png": "db56b6b41a57f47546c3cf72bc7d5f5c",
"assets/assets/images/game_assets/buildings/consumers/factoryf1.png": "22e2f59d6be7cf14d5c4c1bbd004f725",
"assets/assets/images/game_assets/buildings/consumers/factoryf2.png": "d32bb81dd08802633dcfce0bb29b956d",
"assets/assets/images/game_assets/buildings/consumers/market.png": "011a4b19a03b68ea1cd01dc561526b77",
"assets/assets/images/game_assets/buildings/consumers/residential.png": "703933d50dc6be5aa452fc86969385eb",
"assets/assets/images/game_assets/buildings/consumers/residentialf1.png": "adf11dda771d5e43d1f902b48cb689ba",
"assets/assets/images/game_assets/buildings/consumers/residentialf2.png": "0f6663afc9ee218b233aac7d73fc9795",
"assets/assets/images/game_assets/buildings/generators/solar_panel.png": "df9dd009d95674015dc98a1af3aa8338",
"assets/assets/images/game_assets/buildings/generators/water.png": "867470ec90d41d772916bfce79b0e4ed",
"assets/assets/images/game_assets/buildings/generators/wind.png": "48210508dc98be92cf1c842b8140ded4",
"assets/assets/images/game_assets/button/images/button%2520UI.png": "5b1c0351b55e5e83053bea1067e131c1",
"assets/assets/images/game_assets/button/images/UI_Flat_Banner_01_Downward.png": "bf8a3b0f4235fdebac91a066133f1c03",
"assets/assets/images/game_assets/button/images/UI_Flat_Banner_01_Upward.png": "a1fa4b03c46e048691e552afdbad908b",
"assets/assets/images/game_assets/button/images/UI_Flat_Banner_02_Downward.png": "65958be8c7b37bd57cf5e32ed243a956",
"assets/assets/images/game_assets/button/images/UI_Flat_Banner_02_Upward.png": "d85fbb73c6939b0677241328201af240",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Large_Lock_01a1.png": "19ac165497141cfd13961cb050198567",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Large_Lock_01a2.png": "9516a6af0fc60142562a04d35ce656fe",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Large_Lock_01a3.png": "fce63a56b55b6fb08c31454465c8f899",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Large_Lock_01a4.png": "f7d83c9c21e6dfc8c20cf9af48cc3d15",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Large_Lock_02a1.png": "ffdcba89e0558fa7f7bdaa1ea77882d7",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Large_Lock_02a2.png": "e92610a3e5ba51bd2ab5ec59b5eec829",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Large_Lock_02a3.png": "8816ddf34a327f4818a7a167539d5b68",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Large_Lock_02a4.png": "06f702c2c66aac69062f1cb500198470",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Large_Press_01a1.png": "19ac165497141cfd13961cb050198567",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Large_Press_01a2.png": "9516a6af0fc60142562a04d35ce656fe",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Large_Press_01a3.png": "f7d83c9c21e6dfc8c20cf9af48cc3d15",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Large_Press_01a4.png": "3f4110508d3a513464810ad3e677ae18",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Large_Press_02a1.png": "ffdcba89e0558fa7f7bdaa1ea77882d7",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Large_Press_02a2.png": "e92610a3e5ba51bd2ab5ec59b5eec829",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Large_Press_02a3.png": "06f702c2c66aac69062f1cb500198470",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Large_Press_02a4.png": "df8db0cb5ba069709bb71f90f1926d38",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Large_Release_01a1.png": "f7d83c9c21e6dfc8c20cf9af48cc3d15",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Large_Release_01a2.png": "fce63a56b55b6fb08c31454465c8f899",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Large_Release_01a3.png": "3f4110508d3a513464810ad3e677ae18",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Large_Release_01a4.png": "19ac165497141cfd13961cb050198567",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Large_Release_02a1.png": "06f702c2c66aac69062f1cb500198470",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Large_Release_02a2.png": "8816ddf34a327f4818a7a167539d5b68",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Large_Release_02a3.png": "df8db0cb5ba069709bb71f90f1926d38",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Large_Release_02a4.png": "ffdcba89e0558fa7f7bdaa1ea77882d7",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Medium_Lock_01a1.png": "b00831314c31f51200425a0471198530",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Medium_Lock_01a2.png": "ef6d48df129c816d9b740d2ec8d83df3",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Medium_Lock_01a3.png": "2cfdb111143baf0447d660d1f37d4185",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Medium_Lock_01a4.png": "4cdf93abc28c1651a2b434de2b9cb121",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Medium_Lock_02a1.png": "33546ed8da30863ac56b2e022f6cefbf",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Medium_Lock_02a2.png": "725ce2634979e2e84bb9ea9372e59a5a",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Medium_Lock_02a3.png": "33b3b7db6cc10517ec8a091f66e6e034",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Medium_Lock_02a4.png": "2b1cc169743372aecb812942c14c9f7d",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Medium_Press_01a1.png": "b00831314c31f51200425a0471198530",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Medium_Press_01a2.png": "ef6d48df129c816d9b740d2ec8d83df3",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Medium_Press_01a3.png": "4cdf93abc28c1651a2b434de2b9cb121",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Medium_Press_01a4.png": "ec429a53cbbf4183ac7bc7a021bcb915",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Medium_Press_02a1.png": "33546ed8da30863ac56b2e022f6cefbf",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Medium_Press_02a2.png": "725ce2634979e2e84bb9ea9372e59a5a",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Medium_Press_02a3.png": "2b1cc169743372aecb812942c14c9f7d",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Medium_Press_02a4.png": "0d35496855518de2ad1e37c10eb28c22",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Medium_Release_01a1.png": "4cdf93abc28c1651a2b434de2b9cb121",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Medium_Release_01a2.png": "2cfdb111143baf0447d660d1f37d4185",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Medium_Release_01a3.png": "ec429a53cbbf4183ac7bc7a021bcb915",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Medium_Release_01a4.png": "b00831314c31f51200425a0471198530",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Medium_Release_02a1.png": "2b1cc169743372aecb812942c14c9f7d",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Medium_Release_02a2.png": "33b3b7db6cc10517ec8a091f66e6e034",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Medium_Release_02a3.png": "0d35496855518de2ad1e37c10eb28c22",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Medium_Release_02a4.png": "33546ed8da30863ac56b2e022f6cefbf",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Small_Lock_01a1.png": "25a3de3f0bc3b08d5b57329c75530a4c",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Small_Lock_01a2.png": "c997e3d0c917a4c0f5c11dc410f16cc5",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Small_Lock_01a3.png": "ecb6a177d0b7dd8d2918524a6e9075d0",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Small_Lock_01a4.png": "e48cb07e31e6b965ace8715771326aa8",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Small_Lock_02a1.png": "6344f96c1b5cb6184e29e8292c037cbc",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Small_Lock_02a2.png": "3b30fdd4751d746b440802531fa1d05e",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Small_Lock_02a3.png": "eaead0d8177f7565048a96ee6d109c3a",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Small_Lock_02a4.png": "034c046992d67c4de3cfc85a9146d439",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Small_Press_01a1.png": "25a3de3f0bc3b08d5b57329c75530a4c",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Small_Press_01a2.png": "c997e3d0c917a4c0f5c11dc410f16cc5",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Small_Press_01a3.png": "e48cb07e31e6b965ace8715771326aa8",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Small_Press_01a4.png": "3f1da650dca0d22857ec9285b0d08add",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Small_Press_02a1.png": "6344f96c1b5cb6184e29e8292c037cbc",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Small_Press_02a2.png": "3b30fdd4751d746b440802531fa1d05e",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Small_Press_02a3.png": "034c046992d67c4de3cfc85a9146d439",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Small_Press_02a4.png": "2843bbcf4dafa37691880b0248e0164b",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Small_Release_01a1.png": "e48cb07e31e6b965ace8715771326aa8",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Small_Release_01a2.png": "ecb6a177d0b7dd8d2918524a6e9075d0",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Small_Release_01a3.png": "3f1da650dca0d22857ec9285b0d08add",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Small_Release_01a4.png": "25a3de3f0bc3b08d5b57329c75530a4c",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Small_Release_02a1.png": "034c046992d67c4de3cfc85a9146d439",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Small_Release_02a2.png": "eaead0d8177f7565048a96ee6d109c3a",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Small_Release_02a3.png": "2843bbcf4dafa37691880b0248e0164b",
"assets/assets/images/game_assets/button/images/UI_Flat_Button_Small_Release_02a4.png": "6344f96c1b5cb6184e29e8292c037cbc",
"assets/assets/images/game_assets/button/images/UI_Flat_Checkmark_Large.png": "b0e8e99a258337e0dd6b3b8e22117b79",
"assets/assets/images/game_assets/button/images/UI_Flat_Checkmark_Medium.png": "1dabeb189bb8a1b112f428f741acbe24",
"assets/assets/images/game_assets/button/images/UI_Flat_Checkmark_Small.png": "cf72229cdbcb20952956fc246b0a9206",
"assets/assets/images/game_assets/button/images/UI_Flat_Cross_Large.png": "e7d445a468a91de38e60e55a01573655",
"assets/assets/images/game_assets/button/images/UI_Flat_Cross_Medium.png": "b029862ca56b4fc8aa5003ac27582fa7",
"assets/assets/images/game_assets/button/images/UI_Flat_Cross_Small.png": "1a93835153c68fa9fedefb321b6cfa0a",
"assets/assets/images/game_assets/button/images/UI_Flat_Dropdown.png": "67badf8ea47d323164023bb33a644658",
"assets/assets/images/game_assets/button/images/UI_Flat_Dropdown_Handle.png": "3f57898eba65d491533d540961bdd987",
"assets/assets/images/game_assets/button/images/UI_Flat_Fillbar_01_Block.png": "9019acf655a078809f6843f4e9e16e8c",
"assets/assets/images/game_assets/button/images/UI_Flat_Fillbar_01_Flat.png": "cef1c114697e23267d8f7f3075e1d337",
"assets/assets/images/game_assets/button/images/UI_Flat_Fillbar_01_Hollow.png": "4d9d1efc8d65cc5b36655a7f29229a4c",
"assets/assets/images/game_assets/button/images/UI_Flat_Fillbar_02_Block.png": "0376de2b75bf7f30a2a64130b6b7947d",
"assets/assets/images/game_assets/button/images/UI_Flat_Fillbar_02_Flat.png": "b3bfc0329f27d21ea35db73b0567df42",
"assets/assets/images/game_assets/button/images/UI_Flat_Fillbar_02_Hollow.png": "c4789e5e237080fc5c8638a736656d35",
"assets/assets/images/game_assets/button/images/UI_Flat_Filler_01.png": "7412e3ea3c53724325808eaa885fd422",
"assets/assets/images/game_assets/button/images/UI_Flat_Filler_02.png": "2de17fd2223c806abc1989af2c8bf2ab",
"assets/assets/images/game_assets/button/images/UI_Flat_Filler_03.png": "41ea6d50d1369fa164efce47ee5417f6",
"assets/assets/images/game_assets/button/images/UI_Flat_Filler_04.png": "ab8d9dadf1f6930be19cc16c27939569",
"assets/assets/images/game_assets/button/images/UI_Flat_Filler_05.png": "f0ae1aac14aa1a97d9f271598b934338",
"assets/assets/images/game_assets/button/images/UI_Flat_Frame_01_Horizontal.png": "eaba004e64f856df0ed8f0108312c9b6",
"assets/assets/images/game_assets/button/images/UI_Flat_Frame_01_Inward.png": "f0976043ba8657bfd5e4ac21d483f4bf",
"assets/assets/images/game_assets/button/images/UI_Flat_Frame_01_Lite.png": "0755218c6b94d9fa2149cf756aa0fb9b",
"assets/assets/images/game_assets/button/images/UI_Flat_Frame_01_Standard.png": "13236ca85cec788bebf57c8230d87635",
"assets/assets/images/game_assets/button/images/UI_Flat_Frame_01_Vertical.png": "4c2e582f5f9dc0e7577d5edc5ff92acc",
"assets/assets/images/game_assets/button/images/UI_Flat_Frame_02_Horizontal.png": "be91fcdea0c2f2f2679c640b9e2cdb5e",
"assets/assets/images/game_assets/button/images/UI_Flat_Frame_02_Inward.png": "fd56af41a47d927aec2eed431a6f4d77",
"assets/assets/images/game_assets/button/images/UI_Flat_Frame_02_Lite.png": "27d315ef22a6087e93ab99a19a39db38",
"assets/assets/images/game_assets/button/images/UI_Flat_Frame_02_Standard.png": "60ea71c6ca0fe5d499889ec0c708837a",
"assets/assets/images/game_assets/button/images/UI_Flat_Frame_02_Vertical.png": "c4e4ca73e180641e32839105790adf5e",
"assets/assets/images/game_assets/button/images/UI_Flat_Scrollbar_01.png": "83832db7928a5132c2de0aa13fc03e03",
"assets/assets/images/game_assets/button/images/UI_Flat_Scrollbar_02.png": "8538bd99d98da5bb4120e24edbfdd979",
"assets/assets/images/game_assets/button/images/UI_Flat_Scrollbar_03.png": "075eb2cee81ea8748eaeb8396598c482",
"assets/assets/images/game_assets/button/images/UI_Flat_Scrollbar_04.png": "65b198d7bac0aadb0f59b7fc5c04342a",
"assets/assets/images/game_assets/button/images/UI_Flat_Scrollbar_Handle_01.png": "da3bb896a2eb8572a0380aa19e072931",
"assets/assets/images/game_assets/button/images/UI_Flat_Scrollbar_Handle_02.png": "10c7aa9ce807a1399dd680665e54de39",
"assets/assets/images/game_assets/button/images/UI_Flat_Scrollbar_Handle_03.png": "09a730c69c9da684086646a7dc86cf6e",
"assets/assets/images/game_assets/button/images/UI_Flat_Scrollbar_Handle_04.png": "7f01045d2d76b90cc02263ae2ebe8c1c",
"assets/assets/images/game_assets/button/images/UI_Flat_Select_01a1.png": "428f7f295686dcda5619e83662211225",
"assets/assets/images/game_assets/button/images/UI_Flat_Select_01a2.png": "cbf82087e907a8c24feb5d6c5d7c5464",
"assets/assets/images/game_assets/button/images/UI_Flat_Select_01a3.png": "e6385ee42706ec3e118576f392ae9e49",
"assets/assets/images/game_assets/button/images/UI_Flat_Select_01a4.png": "cbf82087e907a8c24feb5d6c5d7c5464",
"assets/assets/images/game_assets/button/images/UI_Flat_Select_02a1.png": "428f7f295686dcda5619e83662211225",
"assets/assets/images/game_assets/button/images/UI_Flat_Select_02a2.png": "cbf82087e907a8c24feb5d6c5d7c5464",
"assets/assets/images/game_assets/button/images/UI_Flat_Select_02a3.png": "e6385ee42706ec3e118576f392ae9e49",
"assets/assets/images/game_assets/button/images/UI_Flat_Select_02a4.png": "cbf82087e907a8c24feb5d6c5d7c5464",
"assets/assets/images/game_assets/button/images/UI_Flat_Slider.png": "2aacf7f890e4161c5239430abd94f8e2",
"assets/assets/images/game_assets/button/images/UI_Flat_Slider_Filler.png": "7c93e7489c19fc0b82c93cf8acf4fab2",
"assets/assets/images/game_assets/button/images/UI_Flat_Slot_01_Available.png": "ae100dac1f65573c08b3cf9b41e51b8f",
"assets/assets/images/game_assets/button/images/UI_Flat_Slot_01_Selected.png": "97ea3b72e0f6146968f4ef1d1f24ce56",
"assets/assets/images/game_assets/button/images/UI_Flat_Slot_01_Unavailable.png": "80edbda829d7d2ba249c3cdd4917e3e3",
"assets/assets/images/game_assets/button/images/UI_Flat_Slot_02_Available.png": "6e3e7d9a7fa35194f11179f9f56a1ee4",
"assets/assets/images/game_assets/button/images/UI_Flat_Slot_02_Selected.png": "f5acf7c04f0164c3a90285fab90c2b72",
"assets/assets/images/game_assets/button/images/UI_Flat_Slot_02_Unavailable.png": "7f8a8f4c444cdcaa1b01ba57708db663",
"assets/assets/images/game_assets/button/images/UI_Flat_Textfield_01.png": "144c57476f84f4d885dc2dde0ab5e011",
"assets/assets/images/game_assets/button/images/UI_Flat_Textfield_02.png": "64c5741d68eeb8137d6c3430e1673984",
"assets/assets/images/game_assets/character/images/portraits/Pixel-Portraits-Free/Feminine_A/Feminine_A_angry.png": "bd5ac3c3a965f5514de3907a469bc999",
"assets/assets/images/game_assets/character/images/portraits/Pixel-Portraits-Free/Feminine_A/Feminine_A_annoyed.png": "eeb5bd32fa111fe8c40f44d622580ed7",
"assets/assets/images/game_assets/character/images/portraits/Pixel-Portraits-Free/Feminine_A/Feminine_A_default.png": "4ebddcf70afb90c808fbad0e82feb3da",
"assets/assets/images/game_assets/character/images/portraits/Pixel-Portraits-Free/Feminine_A/Feminine_A_happy.png": "b32d4c072bb1e8e0e643e4d4ddd20f64",
"assets/assets/images/game_assets/character/images/portraits/Pixel-Portraits-Free/Feminine_A/Feminine_A_sad.png": "81505eeaec7a80cfe8cccead1759abbc",
"assets/assets/images/game_assets/character/images/portraits/Pixel-Portraits-Free/Feminine_A/Feminine_A_surprised.png": "6d4650efb48f98394fce2566839513be",
"assets/assets/images/game_assets/character/images/portraits/Pixel-Portraits-Free/Feminine_A/Hair_A_Feminine_A-base.png": "d46d9172a347a39de9de131c4927f732",
"assets/assets/images/game_assets/character/spritesheets/Original/Without%2520Outline/MiniAnvil.png": "009ddf173e1d60555f452e801753292f",
"assets/assets/images/game_assets/character/spritesheets/Original/Without%2520Outline/MiniBlacksmith.png": "d2b6d375a2064e1a30fa8bed13e13ec7",
"assets/assets/images/game_assets/character/spritesheets/Original/Without%2520Outline/MiniGatherer.png": "ac9467ffa0bb187d88ec5af08e68e138",
"assets/assets/images/game_assets/character/spritesheets/Original/Without%2520Outline/MiniGraveDigger.png": "5123eda05181ea081850d02fefef4faa",
"assets/assets/images/game_assets/character/spritesheets/Original/Without%2520Outline/MiniHunter.png": "1aea744aff0b79a79d2fe55099120435",
"assets/assets/images/game_assets/character/spritesheets/Original/Without%2520Outline/MiniLumberjack.png": "0641c08e658956a1b72c628fde0e9a91",
"assets/assets/images/game_assets/character/spritesheets/Original/Without%2520Outline/MiniMerchant.png": "db18e456e0426763c7a9c9fa62c41a58",
"assets/assets/images/game_assets/character/spritesheets/Original/Without%2520Outline/MiniMiner.png": "e760456814b5bf22e28b9cae62213b71",
"assets/assets/images/game_assets/character/spritesheets/Original/Without%2520Outline/MiniNun.png": "82e59ff18ec0bffc5c1d51fde3ad9017",
"assets/assets/images/game_assets/character/spritesheets/Original/Without%2520Outline/MiniSuspiciousMerchant.png": "6fc7e8fce3cc064b261ffae48cacd5a0",
"assets/assets/images/game_assets/character/spritesheets/Original/Without%2520Outline/MiniThief.png": "5ce8f7c49a5b3f6daa68054019a83c9e",
"assets/assets/images/game_assets/constructing/cone.png": "8e79f05a995107a6d697167983fe55c8",
"assets/assets/images/game_assets/constructing/roadblock.png": "52ab31c2d60c1c7d081da076f3d95fb2",
"assets/assets/images/game_assets/constructing/Sign%2520Attention.png": "eaa8ba7083ef66685e5724684698ee5f",
"assets/assets/images/game_assets/constructing/Sign%2520Human.png": "d39efa2b492894a1ec2da1b1216e0286",
"assets/assets/images/png/app_logo.png": "47d48eebbef11f6068e8695d15e40469",
"assets/assets/images/png/character.png": "99d2ffbe66b9044f59fa2bb175a7010e",
"assets/assets/images/png/crown.png": "06215f056508848f1246fb30bae0e35f",
"assets/assets/images/png/eco.png": "57962bb4315c03f14343842892ed1721",
"assets/assets/images/png/energ.png": "16b3922cd170af4043fd516d15eff215",
"assets/assets/images/png/energy.png": "732843144860ceb369c999bfcd56a5ad",
"assets/assets/images/png/google.png": "cc4ce17a46bd25a88767ee6681f05c06",
"assets/assets/images/png/light_bulb.png": "5a53c2d6f3119089d78ca6f49dd61f8a",
"assets/assets/images/png/light_led.png": "965e95eaaa8c32c8dd46356c59e0b6d5",
"assets/assets/images/png/store.png": "412a51569dbe38e79d825977edfda5b3",
"assets/assets/images/png/summer.png": "ef6ac9983d7ea5eba37f0756824e2fa4",
"assets/assets/images/png/web_logo.png": "21ab55624ff4e2c4fb1d0a80b2414503",
"assets/assets/lottie/eco.json": "e476fd8b33db473d3655c2dd3b8c4273",
"assets/assets/lottie/energy.json": "a7796ede766c55183cc9c5ed0ae9fa4d",
"assets/assets/map.png": "d8716fae9febbcfd5110cab2839278bf",
"assets/FontManifest.json": "deaa5c57341d3a8639aa1a1af22a8236",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "1107b1c9c0ee10911a276cd0651bfa16",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/ar_add_to_google_wallet_add-wallet-badge.svg": "075195f0cc17403915b9b27294d32690",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/ar_add_to_google_wallet_wallet-button.svg": "a319ec582759ce0323961c857cfc3b95",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/az_add_to_google_wallet_add-wallet-badge.svg": "7e58155d750a5031db3b6fb45a0dc77b",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/az_add_to_google_wallet_wallet-button.svg": "be1b283fdbbd1294e184fe57350bbefb",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/bg_add_to_google_wallet_add-wallet-badge.svg": "66c3501aa3c55f89b422f63ee144a532",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/bg_add_to_google_wallet_wallet-button.svg": "d7385ecffaaa931198bdf96b41f2bf05",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/br_add_to_google_wallet_add-wallet-badge.svg": "270f3e391f75b0348e92efc95067fa3e",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/br_add_to_google_wallet_wallet-button.svg": "94afb493cf56aabd3939842b707e3fa3",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/bs_add_to_google_wallet_add-wallet-badge.svg": "cca7a264ed911f228c7b6831de013d85",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/bs_add_to_google_wallet_wallet-button.svg": "2cbcbcfe4eaf2d0ae08dd8ab36ead115",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/by_add_to_google_wallet_add-wallet-badge.svg": "8a6368c0d5ed0624ca957388a2bab0d2",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/by_add_to_google_wallet_wallet-button.svg": "39fcfcc4cbaca6653f803bbd3bbf8d1b",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/ca_add_to_google_wallet_add-wallet-badge.svg": "cc4a37530cbe23dd18272a7c11abccbf",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/ca_add_to_google_wallet_wallet-button.svg": "d02a2c4a1e9fba69670b472c87a32e64",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/cz_add_to_google_wallet_add-wallet-badge.svg": "465d9f643167f9b73aefc0748a94244f",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/cz_add_to_google_wallet_wallet-button.svg": "944d7d46e9624083cd3b22505ca1aec1",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/de_add_to_google_wallet_add-wallet-badge.svg": "17e0402f54ce6a58138dc81efd40e19f",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/de_add_to_google_wallet_wallet-button.svg": "ebed79da6fbafc180e56c88e20a0dd1e",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/dk_add_to_google_wallet_add-wallet-badge.svg": "158589a02a1d4860895a065602342f0b",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/dk_add_to_google_wallet_wallet-button.svg": "ab785988df8532a0c26deae190b51a1f",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/enAU_add_to_google_wallet_add-wallet-badge.svg": "bb0183049cbf020ec9c3fd25d21e8378",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/enAU_add_to_google_wallet_wallet-button.svg": "f9cb2d734252f2e86021e53ce5dae4cc",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/enCA_add_to_google_wallet_add-wallet-badge.svg": "bb0183049cbf020ec9c3fd25d21e8378",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/enCA_add_to_google_wallet_wallet-button.svg": "f9cb2d734252f2e86021e53ce5dae4cc",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/enGB_add_to_google_wallet_add-wallet-badge.svg": "bb0183049cbf020ec9c3fd25d21e8378",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/enGB_add_to_google_wallet_wallet-button.svg": "f9cb2d734252f2e86021e53ce5dae4cc",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/enIN_add_to_google_wallet_add-wallet-badge.svg": "bb0183049cbf020ec9c3fd25d21e8378",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/enIN_add_to_google_wallet_wallet-button.svg": "f9cb2d734252f2e86021e53ce5dae4cc",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/enSG_add_to_google_wallet_add-wallet-badge.svg": "bb0183049cbf020ec9c3fd25d21e8378",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/enSG_add_to_google_wallet_wallet-button.svg": "f9cb2d734252f2e86021e53ce5dae4cc",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/enUS_add_to_google_wallet_add-wallet-badge.svg": "bb0183049cbf020ec9c3fd25d21e8378",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/enUS_add_to_google_wallet_wallet-button.svg": "f9cb2d734252f2e86021e53ce5dae4cc",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/enZA_add_to_google_wallet_add-wallet-badge.svg": "bb0183049cbf020ec9c3fd25d21e8378",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/enZA_add_to_google_wallet_wallet-button.svg": "f9cb2d734252f2e86021e53ce5dae4cc",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/es419_add_to_google_wallet_add-wallet-badge.svg": "83b6651abf05b48b0d57af484c155bf8",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/es419_add_to_google_wallet_wallet-button.svg": "5811afb15e614573070d7ab3050737b6",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/esES_add_to_google_wallet_add-wallet-badge.svg": "a947ceecfacc61b45685c84492cd8cde",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/esES_add_to_google_wallet_wallet-button.svg": "3039ee3f952bfb187f03e54c346afcc6",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/esUS_add_to_google_wallet_add-wallet-badge.svg": "83b6651abf05b48b0d57af484c155bf8",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/esUS_add_to_google_wallet_wallet-button.svg": "5811afb15e614573070d7ab3050737b6",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/et_add_to_google_wallet_add-wallet-badge.svg": "aca7582683bc52f5a40d4000021aa3a1",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/et_add_to_google_wallet_wallet-button.svg": "8393f5952449e6f16d7a8e2242a494c0",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/fl_add_to_google_wallet_add-wallet-badge.svg": "09fa7696ad111bbadb1f5d79aca7353a",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/fl_add_to_google_wallet_wallet-button.svg": "c639b4ff00d9b3b28863673c2eac6ad1",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/fp_add_to_google_wallet_add-wallet-badge.svg": "cb5f29cbb46fa1837407dd53b68304a5",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/fp_add_to_google_wallet_wallet-button.svg": "e666fcbcf2101ae0ce68901c417c8bdd",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/frCA_add_to_google_wallet_add-wallet-badge.svg": "8aeffd9eb6e815262cde73c75e6e7b69",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/frCA_add_to_google_wallet_wallet-button.svg": "2524448e7c4e012c4df1c8b8a610100e",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/frFR_add_to_google_wallet_add-wallet-badge.svg": "8aeffd9eb6e815262cde73c75e6e7b69",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/frFR_add_to_google_wallet_wallet-button.svg": "2524448e7c4e012c4df1c8b8a610100e",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/gr_add_to_google_wallet_add-wallet-badge.svg": "0cdd5b9a3a784acac76bdc21ab52022c",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/gr_add_to_google_wallet_wallet-button.svg": "fba0a4195044b271bc308fc57127800c",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/he_add_to_google_wallet_add-wallet-badge.svg": "5a1f5b4124c73e749b816319638649f6",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/he_add_to_google_wallet_wallet-button.svg": "1c38b5071f21d419d0d6d66fa3e81bbf",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/hr_add_to_google_wallet_add-wallet-badge.svg": "e48754281d32896ce08f685558aa162f",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/hr_add_to_google_wallet_wallet-button.svg": "c44f2a29dfd1b87eca97ff7a768cd9a3",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/hu_add_to_google_wallet_add-wallet-badge.svg": "9690ed1fcc7df8624892ac5241237406",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/hu_add_to_google_wallet_wallet-button.svg": "a307a869dd85929857695d79950fb615",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/hy_add_to_google_wallet_add-wallet-badge.svg": "9f4a6859fd6ba5bc53b10dfca6bf5d41",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/hy_add_to_google_wallet_wallet-button.svg": "2d2f37f9da01c86dc600aa7cab7536d8",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/id_add_to_google_wallet_add-wallet-badge.svg": "894bfa4a640096bd8e9c95e02dfb101e",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/id_add_to_google_wallet_wallet-button.svg": "6924425f4ab319088d9800299e714acb",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/is_add_to_google_wallet_add-wallet-badge.svg": "e32d15ad3738cdc06afc709626970415",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/is_add_to_google_wallet_wallet-button.svg": "215feb5c6a2419a9b0e0050dae97486c",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/it_add_to_google_wallet_add-wallet-badge.svg": "f35d14860bf7ee1656840e89ab915b78",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/it_add_to_google_wallet_wallet-button.svg": "cc8cae06eab664fa40c6d64870841bd1",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/jp_add_to_google_wallet_add-wallet-badge.svg": "3fb7225658c8ae14dae6309bbf047001",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/jp_add_to_google_wallet_wallet-button.svg": "3e950b181d8e17d467a626d22cf81d76",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/ka_add_to_google_wallet_add-wallet-badge.svg": "553c2b809e396cc6c2012c86a7e4b806",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/ka_add_to_google_wallet_wallet-button.svg": "55082dcac27d7246d01308b7395c5109",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/kk_add_to_google_wallet_add-wallet-badge.svg": "3a8828c8640dce7289a517cc005f0e18",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/kk_add_to_google_wallet_wallet-button.svg": "bcd00426390a659478cbd3d70ebddfc3",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/ky_add_to_google_wallet_add-wallet-badge.svg": "30d92c8985fca1b296bbae23907ddfc8",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/ky_add_to_google_wallet_wallet-button.svg": "0feee9b704f1ab5ce7151a8380c9fc9f",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/lt_add_to_google_wallet_add-wallet-badge.svg": "68f14f0f41d2ed89ff761d996200c670",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/lt_add_to_google_wallet_wallet-button.svg": "5b1115a3154b3774b10766e0832576fe",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/lv_add_to_google_wallet_add-wallet-badge.svg": "1ae04b1898a86edd32e5132b89d364a5",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/lv_add_to_google_wallet_wallet-button.svg": "d0c98dac3debb23233e23140d8699b03",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/mk_add_to_google_wallet_add-wallet-badge.svg": "6c973464907d8e8ee6a3f0a670bc3dd9",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/mk_add_to_google_wallet_wallet-button.svg": "1c0a21d55f1a6e6aef6163053f8cd415",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/my_add_to_google_wallet_add-wallet-badge.svg": "fd065e1ee79fc700368d39054b503693",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/my_add_to_google_wallet_wallet-button.svg": "d3fbe6ef20fb6d114451f2d95d21b534",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/nl_add_to_google_wallet_add-wallet-badge.svg": "6185561fdc600aa74042b056a2ffe92d",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/nl_add_to_google_wallet_wallet-button.svg": "c651215ae7e313bd1cba833d150bbe3f",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/no_add_to_google_wallet_add-wallet-badge.svg": "77553bf6883d562f2cdb8beb4afdd50d",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/no_add_to_google_wallet_wallet-button.svg": "6abde49cd73abff698fc724a55c72cbd",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/pl_add_to_google_wallet_add-wallet-badge.svg": "2ab6a9d46549fb05a0e1008a8488b552",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/pl_add_to_google_wallet_wallet-button.svg": "f0e859e1760adf3e18efa80c69be74eb",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/pt_add_to_google_wallet_add-wallet-badge.svg": "270f3e391f75b0348e92efc95067fa3e",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/pt_add_to_google_wallet_wallet-button.svg": "94afb493cf56aabd3939842b707e3fa3",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/ro_add_to_google_wallet_add-wallet-badge.svg": "46b782645a5425495f8f5c0ac9ea0bf0",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/ro_add_to_google_wallet_wallet-button.svg": "e06c5c4a292f3cbfcee6eb62728bb955",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/ru_add_to_google_wallet_add-wallet-badge.svg": "8a6368c0d5ed0624ca957388a2bab0d2",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/ru_add_to_google_wallet_wallet-button.svg": "39fcfcc4cbaca6653f803bbd3bbf8d1b",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/se_add_to_google_wallet_add-wallet-badge.svg": "4784a44a66debaecc4ed0a5269c85480",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/se_add_to_google_wallet_wallet-button.svg": "0d7814fd720a20f5bb87a5f06f3ca06d",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/sk_add_to_google_wallet_add-wallet-badge.svg": "4f6bbe6e31895f7de4c71a97c1a3194f",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/sk_add_to_google_wallet_wallet-button.svg": "e41663eaa417e8286bfca7d29f69b7b9",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/sl_add_to_google_wallet_add-wallet-badge.svg": "42fcddae51c22fff06b1a3d66f9b3fe3",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/sl_add_to_google_wallet_wallet-button.svg": "249b89f6412efb991274fe7b615c6639",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/sq_add_to_google_wallet_add-wallet-badge.svg": "9b12c7a72c8c9874fded81a71eb46a66",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/sq_add_to_google_wallet_wallet-button.svg": "435bc323b51ea2b606f6f38b3c6e5b3b",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/sr_add_to_google_wallet_add-wallet-badge.svg": "c22729fc5148f2529ca1860cabc31b5e",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/sr_add_to_google_wallet_wallet-button.svg": "f2a7032645f63b1c1d888dbee01a5ccf",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/th_add_to_google_wallet_add-wallet-badge.svg": "5576f46b0d36a1f01adea3e394e00dc4",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/th_add_to_google_wallet_wallet-button.svg": "b70b9f2e9d1bafb25212494dcd5865ed",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/tr_add_to_google_wallet_add-wallet-badge.svg": "44905b29ddc617b6f35e6bfd90470f8a",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/tr_add_to_google_wallet_wallet-button.svg": "d01b1ef10f114d3405b7f64d1933b709",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/uk_add_to_google_wallet_add-wallet-badge.svg": "671a9cb3ff1677746b22b27c612ce9b0",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/uk_add_to_google_wallet_wallet-button.svg": "360c50dd6d246b8039a9b2229875632c",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/uz_add_to_google_wallet_add-wallet-badge.svg": "8a0ff216a293ad6b6ee7793be6efb40b",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/uz_add_to_google_wallet_wallet-button.svg": "c02c91536aee19e5ba756163f92bf1c0",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/vi_add_to_google_wallet_add-wallet-badge.svg": "6cb4b941e44d7951dc982bac1ea8eeec",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/vi_add_to_google_wallet_wallet-button.svg": "093635fa9b2ff3b0bafda3990cb89b84",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/zhHK_add_to_google_wallet_add-wallet-badge.svg": "361c0b7193c80469a5ffc41b1d671db1",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/zhHK_add_to_google_wallet_wallet-button.svg": "f337c7c5590bd90b917600cb9dda9ea6",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/zhTW_add_to_google_wallet_add-wallet-badge.svg": "361c0b7193c80469a5ffc41b1d671db1",
"assets/packages/flutter_google_wallet/lib/assets/svg/button/zhTW_add_to_google_wallet_wallet-button.svg": "f337c7c5590bd90b917600cb9dda9ea6",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "31b5ffea3daddc69dd01a1f3d6cf63c5",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "a76d309774d33d9856f650bed4292a23",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "3b89dd103490708d19a95adcae52210e",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "1f77739ca9ff2188b539c36f30ffa2be",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "605ed7926cf39a2ad5ec2d1f9d391d3d",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "b62641afc9ab487008e996a5c5865e56",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "f7c53c47a66934504fcbc7cc164895a7",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "1681f34aaca71b8dfb70756bca331eb2",
"assets/packages/pixelarticons/fonts/pixelarticons.otf": "d38fa7c6111a0c992acc370505e76793",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "9b9aa4a9d137e00d7cea6623f7f96261",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "30869e8a85dfc4cc93830e93da0b793b",
"icons/Icon-512.png": "f7a9aa61c8372bdbf3064e737d8e09e6",
"icons/Icon-maskable-192.png": "30869e8a85dfc4cc93830e93da0b793b",
"icons/Icon-maskable-512.png": "f7a9aa61c8372bdbf3064e737d8e09e6",
"index.html": "5297b514883068084f0544c878cf1a7a",
"/": "5297b514883068084f0544c878cf1a7a",
"main.dart.js": "abcbe919bdb05ae0bd789cc86b38eb22",
"manifest.json": "032403f125539cded887d28bbf4a751f",
"style.css": "db67f841263f222c8985c8fc176d51c8",
"version.json": "97551eb02d3289924e0fede718936b65"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
