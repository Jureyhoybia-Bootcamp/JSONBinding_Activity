sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sapips/training/jsonbindingscratch/model/formatter"
], (Controller, JSONModel,formatter) => {
    "use strict";

    return Controller.extend("sapips.training.jsonbindingscratch.controller.JSONBinding", {
        formatter:formatter,
        onInit() {
            let oEmployeeData = {
                Eid:"jurey.hoybia",
                Enabled:true,
                Address:{
                    Street:"General Luna Street",
                    City:"Talisay City",
                    Zip:"6045",
                    Country:"Philippines"
                },
                SalesAmount:"15",
                CurrencyCode:"Php"
            };
            let oEmployeeModel = new JSONModel();
            oEmployeeModel.setData(oEmployeeData);
            this.getView().setModel(oEmployeeModel);
            this.setProductDetailList();
            
        },
        setProductDetailList: function(){
            let oProductDetailListModel = new JSONModel("/model/ProductsModel.json");
            this.getView().setModel(oProductDetailListModel,"oProductDetailListModel");
        }, 
        onSelectProduct: function(oEvent){
            let oList = oEvent.getSource();
            let oSelectedItem = oList.getSelectedItem();
            let oContext = oSelectedItem.getBindingContext("oProductDetailListModel");
            let sPath = oContext.getPath();
            let sFormProductDetails = this.byId("sFormProductDetails");
            sFormProductDetails.bindElement({
                path : sPath,
                model : "oProductDetailListModel"
            });
        }
    });
});