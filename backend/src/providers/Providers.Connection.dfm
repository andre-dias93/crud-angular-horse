object ProviderConnection: TProviderConnection
  OldCreateOrder = False
  Height = 221
  Width = 215
  object FDConnection: TFDConnection
    Params.Strings = (
      'Database=C:\Projects\Palestras\crud-angular-horse\products.fdb'
      'User_Name=sysdba'
      'Password=masterkey'
      'DriverID=FB')
    Left = 88
    Top = 56
  end
  object FDPhysFBDriverLink: TFDPhysFBDriverLink
    Left = 88
    Top = 120
  end
end
