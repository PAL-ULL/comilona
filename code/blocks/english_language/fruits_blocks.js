Blockly.Blocks['fruits'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Fruits: ")
        .appendField(new Blockly.FieldDropdown([["apple","apple-1"], ["avocado","avocado"], ["banana","banana"], ["cherry","cherries"], ["coconut","coconut"], ["grapes","grapes"], ["lemon","lemon-1"], ["orange","orange"], ["peach","peach"], ["pear","pear"], ["pineapple","pineapple"], ["raspberry","raspberry"], ["strawberry","strawberry"], ["watermelon","watermelon"]]), "fruit_dropdown");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};