

<input type="button" id="start" value="開始">
    <input type="button" id="stop" value="停止">

    var geolocation=navigator.geolocation; //取得 Geolocation 物件
    $i("start").onclick=function() {
        var option={
              enableAcuracy:false,
              maximumAge:1000,
              timeout:60000
              };
        watchID=geolocation.watchPosition(successCallback,
                                          errorCallback,
                                          option
                                          );
        $i("start").value="位置監視中"; //變更按鈕顯示
        }; //end of onclick
   $i("stop").onclick=function() {
        geolocation.clearWatch(watchID); //停止監視
        $i("start").value="開始"; //恢復按鈕顯示
        }; //end of onclick
   }; //end of window.onload
   function successCallback(position) {
      var arr=new Array();
      for (var i in position.coords) {
           arr.push(i + "=" + position.coords[i]);
           }
      arr.push(position.timestamp);
      $i("output").innerHTML=arr.join("<br>");
      }
