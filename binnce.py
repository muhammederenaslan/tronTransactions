from binance.spot import Spot

secret_key = 'ZdmOUHVWeqtPl1GFgjQEWAelABaCpplVXpmIEWpwuoCcVE1tsQ1NAsGOv2SS6A3k'
api_key2 = '8oLlnS0M3wChZxbW9CujjzDkzPjG28xBZgZw5nR9g51ttJ97DYssgqDw6iM4H6wJ'
secret_key2= 'R8cdWKlQC4oZU3d0qvuicvBDdbJPtls17nNaw54x8Lt9gx7eSzVLZdxzMxV3cfuL'
api_key ='mc9LiZK9nLOdtvgLTXiODvOnnpMZv9mGmiNAgyciHNVu8aZyp2lNov72znfGWcFZ'
client = Spot(api_secret=secret_key2,api_key=api_key2)
address2='TYYsVvcdt1Nzcqaz6w4pPc1xZnbgUJDe1K'
address = 'TNXHGHxo8Zbz4hVG3R8HaB9u92mzYk5uEH'

coin = 'usdt'
network = 'trx'
amount = '10'

withdraw = client.withdraw(coin=coin,network=network,amount=amount,address=address)

