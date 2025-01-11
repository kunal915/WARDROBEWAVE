const mongoose = require("mongoose");

const mixedContentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
});

const ContentModel = mongoose.model("Content", mixedContentSchema);

module.exports = { ContentModel };
