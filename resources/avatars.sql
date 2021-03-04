CREATE TABLE IF NOT EXISTS `avatars` (
`properties.skin` VARCHAR(MAX) NULL,
`properties.top` VARCHAR(MAX) NULL,
`properties.hairColor` VARCHAR(MAX) NULL,
`properties.hatColor` VARCHAR(MAX) NULL,
`properties.accessoriesColor` VARCHAR(MAX) NULL,
`properties.facialHair` VARCHAR(MAX) NULL,
`properties.facialHairColor` VARCHAR(MAX) NULL,
`properties.clothing` VARCHAR(MAX) NULL,
`properties.clothingGraphic` VARCHAR(MAX) NULL,
`properties.clothingColor` VARCHAR(MAX) NULL,
`properties.eyes` VARCHAR(MAX) NULL,
`properties.eyebrows` VARCHAR(MAX) NULL,
`properties.mouth` VARCHAR(MAX) NULL,
`properties.accessories` VARCHAR(MAX) NULL,
`employeeId` INT NULL,
`id` INT NULL
);

INSERT INTO avatars VALUES
('pale','theCaesar','blonde','gray02','black','default','auburn','shirtScoopNeck','pizza','gray01','default','defaultNatural','twinkle',NULL,1,300),
('light','shortFlat','brownDark','pastelOrange','pastelGreen','beardLight','brownDark','shirtCrewNeck','deer','pastelOrange','default','default','smile',NULL,2,301),
('tanned','shaggyMullet','black','heather','black','default','black','shirtCrewNeck','pizza','black','default','default','default',NULL,3,302),
('pale','shortRound','black','blue01','pastelOrange','default','red','shirtCrewNeck','dumbia','pastelOrange','default','defaultNatural','twinkle',NULL,4,303),
('light','bob','blonde','blue02','black','default','auburn','shirtCrewNeck','pizza','pink','squint','default','default',NULL,5,304),
('light','longButNotTooLong','blondeGolden','blue02','black','default','auburn','shirtCrewNeck','pizza','black','default','defaultNatural','default',NULL,6,305),
('tanned','dreads01','brownDark','blue02','black','default','auburn','shirtCrewNeck','pizza','black','default','defaultNatural','twinkle',NULL,7,306),
('light','theCaesarAndSidePart','black','blue02','black','default','auburn','shirtCrewNeck','pizza','blue03','default','defaultNatural','default','prescription01',8,307),
('light','straight01','blonde','blue02','black','default','auburn','shirtScoopNeck','pizza','white','winkWacky','default','smile',NULL,9,308),
('light','longButNotTooLong','blonde','black','black','default','auburn','shirtCrewNeck','pizza','black','default','defaultNatural','default','round',10,309),
('tanned','theCaesarAndSidePart','auburn','blue02','black','default','auburn','shirtCrewNeck','pizza','black','squint','defaultNatural','default',NULL,11,310),
('darkBrown','shortCurly','black','black','black','default','auburn','shirtCrewNeck','pizza','heather','default','defaultNatural','twinkle',NULL,12,311),
('tanned','shortFlat','brownDark','blue02','black','default','auburn','graphicShirt','deer','red','default','defaultNatural','default',NULL,13,312),
('pale','straight02','black','black','black','default','auburn','shirtScoopNeck','pizza','heather','happy','default','default','prescription02',14,313),
('light','shortFlat','black','blue02','black','default','auburn','graphicShirt','diamond','pastelGreen','eyeRoll','defaultNatural','twinkle',NULL,15,314),
('brown','straightAndStrand','brownDark','blue02','black','default','auburn','overall','pizza','red','happy','defaultNatural','default',NULL,16,315),
('light','shaggy','black','pastelGreen','black','moustaceFancy','brownDark','graphicShirt','skrull','black','squint','raisedExcitedNatural','smile',NULL,17,316),
('light','curly','black','black','black','default','auburn','graphicShirt','hola','heather','default','defaultNatural','smile',NULL,18,317),
('light','dreads02','blonde','blue01','black','default','auburn','shirtCrewNeck','pizza','heather','default','defaultNatural','default',NULL,19,318),
('darkBrown','dreads01','black','blue02','black','default','auburn','shirtCrewNeck','pizza','blue03','default','default','default',NULL,20,319),
('light','shaggyMullet','brownDark','blue02','black','default','auburn','hoodie','pizza','black','default','raisedExcited','twinkle',NULL,21,320),
('light','shortFlat','black','blue02','black','default','auburn','hoodie','pizza','blue03','closed','default','smile',NULL,22,321),
('light','eyepatch','black','blue02','black','beardMedium','black','shirtCrewNeck','pizza','black','happy','raisedExcited','smile',NULL,23,322),
('light','shortFlat','auburn','blue02','black','default','auburn','hoodie','pizza','gray02','default','defaultNatural','default',NULL,24,323),
('light','dreads01','blonde','gray01','black','default','auburn','graphicShirt','dumbia','blue03','default','default','twinkle',NULL,25,324),
('light','shaggy','black','blue02','black','default','black','graphicShirt','pizza','red','default','raisedExcitedNatural','default',NULL,26,325),
('light','theCaesar','black','blue02','black','default','auburn','hoodie','pizza','red','squint','defaultNatural','default','prescription01',27,326),
('pale','bigHair','black','blue02','black','beardMedium','brown','collarAndSweater','pizza','black','default','defaultNatural','twinkle','prescription02',28,327),
('pale','longButNotTooLong','black','blue02','black','default','auburn','shirtCrewNeck','pizza','black','default','defaultNatural','default',NULL,29,328),
('tanned','frida','auburn','blue02','black','default','auburn','shirtCrewNeck','pizza','black','default','defaultNatural','default',NULL,NULL,329);