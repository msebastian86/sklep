<form ng-submit="saveChanges( product )">

    <div class="row" nv-file-drop="" uploader="uploader">

        <div class="col-md-6">
            
            <div class="form-group">
                <label>Nazwa Produktu</label>
                <input type="text" class="form-control" ng-model="product.name">
            </div>

            <div class="form-group">
                <label>Waga:</label>
                <input type="text" class="form-control" ng-model="product.weight">
            </div>

            <div class="form-group">
                <label>Opis:</label>
                <textarea rows="4" type="text" class="form-control" ng-model="product.description">
                </textarea>
            </div>

            <div class="form-group">
                <label>Cena:</label>
                <input type="text" class="form-control" ng-model="product.price">
            </div>

        </div>
    
        <div class="col-md-6">
                      
            {{product.name}}
            <br/><strong class="label label-warning">waga:</strong> {{product.weight}}
            <br/><strong class="label label-warning">opis:</strong> {{product.description}}
            <br/><strong class="label label-warning">cena:</strong> {{(product.price | number:2) + " €"}}

            <div class="clearfix"></div>

            <div ng-repeat="image in images" style="margin-top:10px; display:inline-block;">
              <div style="position:relative; display:inline-block;" class="pull-left;">
                <!-- type button jest po to zeby angular nie łapał pozostałych funkcji ng-.. -->
                <button class="btn btn-danger btn-xs" type="button" ng-click="delImage( image, $index )" style="position:absolute; right: 10px; top: 5px;">&times;</button>
                <img ng-src="uploads/{{ id }}/{{ image }}" alt="{{product.name}}" style="width:150px; margin-right:5px;" class="img-thumbnail pull-left margin-10">
              </div>
            </div>

        </div>

        <div class="clearfix"></div>

        <div class="row">

            <div class="col-md-12">

               <h3>Upload zdjęć</h3>

               <div ng-show="uploader.isHTML5">
                   <!-- 3. nv-file-over uploader="link" over-class="className" -->
                   <div class="well my-drop-zone" nv-file-over="" uploader="uploader">
                       Przeciągnij fotosa
                   </div>
               </div>

               <!-- Example: nv-file-select="" uploader="{Object}" options="{Object}" filters="{String}" -->
               <input class="btn btn-default" type="file" nv-file-select="" uploader="uploader" multiple  /><br/>

               <table class="table">
                   <thead>
                       <tr>
                           <th width="50%">Name</th>
                           <th ng-show="uploader.isHTML5">Size</th>
                           <th ng-show="uploader.isHTML5">Progress</th>
                           <th>Status</th>
                           <th>Actions</th>
                       </tr>
                   </thead>
                   <tbody>
                       <tr ng-repeat="item in uploader.queue">
                           <td>
                               <strong>{{ item.file.name }}</strong>
                               <!-- Image preview -->
                               <!--auto height-->
                               <!--<div ng-thumb="{ file: item.file, width: 100 }"></div>-->
                               <!--auto width-->
                               <div ng-show="uploader.isHTML5" ng-thumb="{ file: item._file, height: 100 }"></div>
                               <!--fixed width and height -->
                               <!--<div ng-thumb="{ file: item.file, width: 100, height: 100 }"></div>-->
                           </td>
                           <td ng-show="uploader.isHTML5" nowrap>{{ item.file.size/1024/1024|number:2 }} MB</td>
                           <td ng-show="uploader.isHTML5">
                               <div class="progress" style="margin-bottom: 0;">
                                   <div class="progress-bar" role="progressbar" ng-style="{ 'width': item.progress + '%' }"></div>
                               </div>
                           </td>
                           <td class="text-center">
                               <span ng-show="item.isSuccess"><i class="glyphicon glyphicon-ok"></i></span>
                               <span ng-show="item.isCancel"><i class="glyphicon glyphicon-ban-circle"></i></span>
                               <span ng-show="item.isError"><i class="glyphicon glyphicon-remove"></i></span>
                           </td>
                           <td nowrap>
                               <button type="button" class="btn btn-success btn-xs" ng-click="item.upload()" ng-disabled="item.isReady || item.isUploading || item.isSuccess">
                                   <span class="glyphicon glyphicon-upload"></span> Upload
                               </button>
                               <button type="button" class="btn btn-warning btn-xs" ng-click="item.cancel()" ng-disabled="!item.isUploading">
                                   <span class="glyphicon glyphicon-ban-circle"></span> Cancel
                               </button>
                               <button type="button" class="btn btn-danger btn-xs" ng-click="item.remove()">
                                   <span class="glyphicon glyphicon-trash"></span> Remove
                               </button>
                           </td>
                       </tr>
                   </tbody>
               </table>

               <div>
                   <div>
                       Queue progress:
                       <div class="progress" style="">
                           <div class="progress-bar" role="progressbar" ng-style="{ 'width': uploader.progress + '%' }"></div>
                       </div>
                   </div>
                   <button type="button" class="btn btn-success btn-s" ng-click="uploader.uploadAll()" ng-disabled="!uploader.getNotUploadedItems().length">
                       <span class="glyphicon glyphicon-upload"></span> Upload all
                   </button>
                   <button type="button" class="btn btn-warning btn-s" ng-click="uploader.cancelAll()" ng-disabled="!uploader.isUploading">
                       <span class="glyphicon glyphicon-ban-circle"></span> Cancel all
                   </button>
                   <button type="button" class="btn btn-danger btn-s" ng-click="uploader.clearQueue()" ng-disabled="!uploader.queue.length">
                       <span class="glyphicon glyphicon-trash"></span> Remove all
                   </button>
               </div>

            </div>

        </div>

        <hr/>


        <div class="jumbotron text-center">
            <a href="#/admin/products" class="btn btn-warning">Wróć, olej zmiany</a>
            <button type="submit" class="btn btn-primary btn-lg" ng-if="!success">Zapisz pan zmiany</button>
            <button type="button" class="btn btn-success btn-lg" ng-if="success">Zmiany zapisane!</button>
        </div>

    </div>
</form>