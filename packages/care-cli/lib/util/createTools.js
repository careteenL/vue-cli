function getPromptModules() {
  // TODO: 丰富功能 `babel/eslint/typescript...`
  return ["vueVersion"].map((file) => require(`../promptModules/${file}`));
}
exports.getPromptModules = getPromptModules;
