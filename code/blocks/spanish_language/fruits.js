Blockly.Blocks['fruits'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Frutas: ")
        .appendField(new Blockly.FieldDropdown([["aguacate","avocado"], ["cereza","cherries"], ["coco","coconut"], ["frambuesa","raspberry"], ["fresa","strawberry"], ["limón","lemon-1"], ["manzana","apple-1"], ["melocotón","peach"], ["naranja","orange"], ["pera","pear"], ["piña","pineapple"], ["plátano","banana"], ["sandía","watermelon"], ["uvas","grapes"]]), "fruit_dropdown");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['fruits'] = function(block) {
  var dropdown_fruit_dropdown = block.getFieldValue('fruit_dropdown');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};