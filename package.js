Package.describe({
  name: "urigo:ionic",
  summary: "Deprecated: use the official `driftyco:ionic` package instead!",
  version: "1.1.0_2",
  git: 'https://github.com/Urigo/meteor-ionic.git'
});

Package.on_use(function (api) {
  api.imply("driftyco:ionic@1.1.0_2");
});