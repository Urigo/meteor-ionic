// disable fastclick if included
if (Package.fastclick) {
  Package.fastclick.FastClick.notNeeded = function() {
    return true;
  };
}

// add 'ionic' angular module as dependency
angularMeteor.requires.push('ionic');