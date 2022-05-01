inherited ServiceProduct: TServiceProduct
  OldCreateOrder = True
  Height = 274
  Width = 233
  inherited FDConnection: TFDConnection
    Params.Strings = (
      
        'Database=C:\Projects\Palestras\crud-angular-horse\backend\db\pro' +
        'ducts.fdb'
      'User_Name=sysdba'
      'Password=masterkey'
      'DriverID=FB')
  end
  object qryProducts: TFDQuery
    Connection = FDConnection
    SQL.Strings = (
      'select id, name, price from product')
    Left = 88
    Top = 184
    object qryProductsid: TLargeintField
      AutoGenerateValue = arAutoInc
      FieldName = 'id'
      Origin = 'id'
      ProviderFlags = [pfInUpdate, pfInWhere, pfInKey]
      ReadOnly = True
    end
    object qryProductsname: TWideStringField
      FieldName = 'name'
      Origin = 'name'
      Size = 60
    end
    object qryProductsPRICE: TFloatField
      FieldName = 'PRICE'
      Origin = 'PRICE'
    end
  end
end
