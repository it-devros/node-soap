

// import the soap and xml2js modules
var soap = require('soap')
var parseString = require('xml2js').parseString

// example WSDL url
var url = 'http://www.webservicex.com/globalweather.asmx?wsdl'


// example function to get the Cities for Each Country
function getCitiesFromWSDL(res, country) {

  // new promise object
  var p = new Promise(function(resolve, reject) {

    soap.createClient(url, function(err, client) {
      if(err) throw new Error(err)

      console.log("Country: ", country)

      var args = {
        CountryName: country
      }


      client.GetCitiesByCountry(args, function(errr, result, body){
        if (errr) reject(errr)
        if (!result) {
          throw new Error("There are no results")
        }

        var cities = result.GetCitiesByCountryResult
        
        parseString(cities, function(erro, respo){
          res.send(respo)
        })
      })

    })

  })

  return p
}


module.exports = getCitiesFromWSDL