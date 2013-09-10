;(function(definitioin){
    var hasExports = typeof module !== undefined && module.exports;
    if(hasExports){
      module.exports = definitioin();
    }else{
      this['args'] = definitioin();
    }
}).call(this, function(){
    var args = {};
    debugger;
    args.get = function(){
        var argv = [].slice.call(process.argv, 2),
            i=0,
            len = argv.length,
            results = {};     
        for(; i < len; i++){
            var item = argv[i],
                param = [];
            if(item.indexOf('=') > -1){
                param = item.split('=');
                results[param[0]] = param[1];
            }else{
                results[item] = true;
            }
        }
        return results;
    }
    return args;
});
