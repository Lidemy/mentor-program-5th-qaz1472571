## 請以自己的話解釋 API 是什麼
API 是一種應用程式介面 (Application Programming Interface) ，而他的概念也非常簡單，就跟去買菸一樣。首先我們會先走便利商店，之後會跟店員說你要的菸(或是菸的編號)。而走去便利商店這個行為就是串接API，跟店員說要幾號就是輸入 Method，之後店員 (串接的API) 就會把你要的東西給你了。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹
* 403 Forbidden 沒有訪問權限
* 400 Bad Request (en-US) 系統收到無效語法，也是我串接API時最常看到的...
* 409 Conflict 要求的東西跟伺服器是衝突的
* 423 Locked (WebDAV (en-US)) 被訪問的資源被鎖定
* 451 Unavailable For Legal Reasons 用戶端請求違法的資源

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。
這是一個餐廳平台的API接口，使用者可以藉由串接此API來新增(create)、刪除(delete)、查詢(read)、更改(update)資料，下列為使用明:

***
Base URL:https://RestaurantPlatform.com
****

|說明       |Method|path           |參數         |範列|
|:-:       |:-:   |:-:            |:-:         |:-:|
|獲取所有餐廳|GET   |/restaurant    |_limit:限制回傳資料數，上限50|/restaurant??_limit=5|
|獲取單一餐廳|GET   |/restaurant/:id|無           |/restaurant/13|
|新增餐廳   |POST  |/restaurant    |name:餐廳名  |無|
|刪除餐廳   |DELETE|/restaurant/:id|無          |無|
|更改餐廳資訊|PATCH |/restaurant/:id|name:餐廳名:|無|