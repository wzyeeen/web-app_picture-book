# API

### CODE_URL :　https://github.com/jesse970146/Webapp
### API_URL(deployed on render.com will be closed soon) :　https://web-app-backend-r3ac.onrender.com

## 用戶部分

### POST   /register 創帳號
提供username與password
```json
{
	"username": "jesse1",
	"password": "testing"	
}
```
Correct Response   使用者成功創建
```json
{
	"message": "User created successfully."
}
```
Error Response   使用者名稱重複
```json
{
	"code": 409,
	"message": "A user with that username already exists.",
	"status": "Conflict"
}
```

### POST   /login 登入
提供username與password
```json
{
	"username": "jesse1",
	"password": "testing"	
}
```
Correst Response 

登入成功會取得由**jwt**生成的token，要使用後續的api，大部分都需要在**http header**提供此token，token會帶有用戶id

token的使用方式請參考 https://medium.com/%E4%BC%81%E9%B5%9D%E4%B9%9F%E6%87%82%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88/jwt-json-web-token-%E5%8E%9F%E7%90%86%E4%BB%8B%E7%B4%B9-74abfafad7ba
```json
{
	"access_token": "token" ,
	"refresh_token": "token"
}
```

Error Response   登入失敗

```json
{
	"code": 401,
	"message": "Invalid credentials",
	"status": "Unauthorized"
}
```

### POST   /logout 登出
僅須提供token便可登出，登出後token會被儲存在database，下次使用會被拒絕

Correct Response   成功登出
```json
{
	"message": " Sucessfully logout"
}
```
若用戶已登出，使用相同token，會告訴用戶token已經被移除
```json
{
	"descripition": "The token has been revoked",
	"error": "token_revoked"
}
```


## 書本部分

### POST   /user/book 創書本 
**需要token**

提供_book_name與tag，書名不可重複
```json
{
	"book_name": "testing book1",
	"tag": "anime"
}
```
Correct Response   書本成功創建，會同時創建八個書頁
```json
{
	"book_name": "testing book1",
	"create_time": "2023-12-13T20:24:30.910676",
	"id": 8,
	"pages": [
		{
			"id": "3",
			"image_url": "imageurl1",
			"page_number": 1,
			"text": "This is page 1"
		},
		{
			"id": "4",
			"image_url": "imageurl2",
			"page_number": 2,
			"text": "This is page 2"
		},
		{
			"id": "5",
			"image_url": "imageurl3",
			"page_number": 3,
			"text": "This is page 3"
		},
		{
			"id": "6",
			"image_url": "imageurl4",
			"page_number": 4,
			"text": "This is page 4"
		},
		{
			"id": "7",
			"image_url": "imageurl5",
			"page_number": 5,
			"text": "This is page 5"
		},
		{
			"id": "8",
			"image_url": "imageurl6",
			"page_number": 6,
			"text": "This is page 6"
		},
		{
			"id": "9",
			"image_url": "imageurl7",
			"page_number": 7,
			"text": "This is page 7"
		},
		{
			"id": "10",
			"image_url": "imageurl8",
			"page_number": 8,
			"text": "This is page 8"
		}
	],
	"tag": "anime",
	"thumb": "0",
	"user": {
		"id": 1,
		"username": "jesse1"
	},
	"user_id": 1
}
```
Error Response   書名重複
```json
{
	"code": 500,
	"message": "(psycopg2.errors.UniqueViolation) duplicate key value violates unique constraint \"books_book_name_key\"\nDETAIL:  Key (book_name)=(testing book1) already exists.\n\n[SQL: INSERT INTO books (book_name, thumb, tag, user_id) VALUES (%(book_name)s, %(thumb)s, %(tag)s, %(user_id)s) RETURNING books.id]\n[parameters: {'book_name': 'testing book1', 'thumb': 0, 'tag': 'anime', 'user_id': 1}]\n(Background on this error at: https://sqlalche.me/e/20/gkpj)",
	"status": "Internal Server Error"
}
```


### GET   /user/book 得到使用者的所有書

**需要token**

Correct Response 
```json
[
	{
		"book_name": "testing book1",
		"create_time": "2023-12-13T20:24:30.910676",
		"id": 8,
		"pages": [
			{
				"id": "4",
				"image_url": "imageurl2",
				"page_number": 2,
				"text": "This is page 2"
			},
			{
				"id": "5",
				"image_url": "imageurl3",
				"page_number": 3,
				"text": "This is page 3"
			},
			{
				"id": "6",
				"image_url": "imageurl4",
				"page_number": 4,
				"text": "This is page 4"
			},
			{
				"id": "7",
				"image_url": "imageurl5",
				"page_number": 5,
				"text": "This is page 5"
			},
			{
				"id": "8",
				"image_url": "imageurl6",
				"page_number": 6,
				"text": "This is page 6"
			},
			{
				"id": "9",
				"image_url": "imageurl7",
				"page_number": 7,
				"text": "This is page 7"
			},
			{
				"id": "10",
				"image_url": "imageurl8",
				"page_number": 8,
				"text": "This is page 8"
			},
			{
				"id": "3",
				"image_url": "/image/1.png",
				"page_number": 1,
				"text": "A man walk with a dog "
			}
		],
		"tag": "anime",
		"thumb": "1",
		"user": {
			"id": 1,
			"username": "jesse1"
		},
		"user_id": 1
	},
	{
		"book_name": "testing book2",
		"create_time": "2023-12-13T20:24:30.910676",
		"id": 11,
		"pages": [
			{
				"id": "11",
				"image_url": "imageurl1",
				"page_number": 1,
				"text": "This is page 1"
			},
			{
				"id": "12",
				"image_url": "imageurl2",
				"page_number": 2,
				"text": "This is page 2"
			},
			{
				"id": "13",
				"image_url": "imageurl3",
				"page_number": 3,
				"text": "This is page 3"
			},
			{
				"id": "14",
				"image_url": "imageurl4",
				"page_number": 4,
				"text": "This is page 4"
			},
			{
				"id": "15",
				"image_url": "imageurl5",
				"page_number": 5,
				"text": "This is page 5"
			},
			{
				"id": "16",
				"image_url": "imageurl6",
				"page_number": 6,
				"text": "This is page 6"
			},
			{
				"id": "17",
				"image_url": "imageurl7",
				"page_number": 7,
				"text": "This is page 7"
			},
			{
				"id": "18",
				"image_url": "imageurl8",
				"page_number": 8,
				"text": "This is page 8"
			}
		],
		"tag": "anime",
		"thumb": "0",
		"user": {
			"id": 1,
			"username": "jesse1"
		},
		"user_id": 1
	}
]
```


### GET   /book/<book_id> 得知特定id書的內容


Correct Response   得到書的內容
```json
{
	"book_name": "testing book1",
	"create_time": "2023-12-13T20:24:30.910676",
	"id": 8,
	"pages": [
		{
			"id": "4",
			"image_url": "imageurl2",
			"page_number": 2,
			"text": "This is page 2"
		},
		{
			"id": "5",
			"image_url": "imageurl3",
			"page_number": 3,
			"text": "This is page 3"
		},
		{
			"id": "6",
			"image_url": "imageurl4",
			"page_number": 4,
			"text": "This is page 4"
		},
		{
			"id": "7",
			"image_url": "imageurl5",
			"page_number": 5,
			"text": "This is page 5"
		},
		{
			"id": "8",
			"image_url": "imageurl6",
			"page_number": 6,
			"text": "This is page 6"
		},
		{
			"id": "9",
			"image_url": "imageurl7",
			"page_number": 7,
			"text": "This is page 7"
		},
		{
			"id": "10",
			"image_url": "imageurl8",
			"page_number": 8,
			"text": "This is page 8"
		},
		{
			"id": "3",
			"image_url": "/image/1.png",
			"page_number": 1,
			"text": "A man walk with a dog "
		}
	],
	"tag": "anime",
	"thumb": "1",
	"user": {
		"id": 1,
		"username": "jesse1"
	},
	"user_id": 1
}
```

### POST   /thumb/<book_id> 按讚
**需要token**

Correct Response   **thumb項的數字會增加**
```json
{
	"book_name": "testing book1",
	"create_time": "2023-12-13T20:24:30.910676",
	"id": 8,
	"pages": [
		{
			"id": "4",
			"image_url": "imageurl2",
			"page_number": 2,
			"text": "This is page 2"
		},
		{
			"id": "5",
			"image_url": "imageurl3",
			"page_number": 3,
			"text": "This is page 3"
		},
		{
			"id": "6",
			"image_url": "imageurl4",
			"page_number": 4,
			"text": "This is page 4"
		},
		{
			"id": "7",
			"image_url": "imageurl5",
			"page_number": 5,
			"text": "This is page 5"
		},
		{
			"id": "8",
			"image_url": "imageurl6",
			"page_number": 6,
			"text": "This is page 6"
		},
		{
			"id": "9",
			"image_url": "imageurl7",
			"page_number": 7,
			"text": "This is page 7"
		},
		{
			"id": "10",
			"image_url": "imageurl8",
			"page_number": 8,
			"text": "This is page 8"
		},
		{
			"id": "3",
			"image_url": "/image/1.png",
			"page_number": 1,
			"text": "A man walk with a dog "
		}
	],
	"tag": "anime",
	"thumb": "1",
	"user": {
		"id": 1,
		"username": "jesse1"
	},
	"user_id": 1
}
```

### POST   /cancelthumb/<book_id> 取消按讚
**需要token**

Correct Response   **thumb項的數字會減少**
```json
{
	"book_name": "testing book1",
	"create_time": "2023-12-13T20:24:30.910676",
	"id": 8,
	"pages": [
		{
			"id": "4",
			"image_url": "imageurl2",
			"page_number": 2,
			"text": "This is page 2"
		},
		{
			"id": "5",
			"image_url": "imageurl3",
			"page_number": 3,
			"text": "This is page 3"
		},
		{
			"id": "6",
			"image_url": "imageurl4",
			"page_number": 4,
			"text": "This is page 4"
		},
		{
			"id": "7",
			"image_url": "imageurl5",
			"page_number": 5,
			"text": "This is page 5"
		},
		{
			"id": "8",
			"image_url": "imageurl6",
			"page_number": 6,
			"text": "This is page 6"
		},
		{
			"id": "9",
			"image_url": "imageurl7",
			"page_number": 7,
			"text": "This is page 7"
		},
		{
			"id": "10",
			"image_url": "imageurl8",
			"page_number": 8,
			"text": "This is page 8"
		},
		{
			"id": "3",
			"image_url": "/image/1.png",
			"page_number": 1,
			"text": "A man walk with a dog "
		}
	],
	"tag": "anime",
	"thumb": "1",
	"user": {
		"id": 1,
		"username": "jesse1"
	},
	"user_id": 1
}
```

## 頁面部分

### PUT   /page/<page_id> 更改特定頁面的內容
***需要token**
需要提供text以及image_url

```json
{
	"text": "A man walk with a dog ",
	"image_url" : "/image/1.png"
}
```
Correct response  頁面物件
```json
{
	"book": {
		"book_name": "testing book1",
		"create_time": "2023-12-13T20:24:30.910676",
		"id": 8,
		"tag": "anime",
		"thumb": "1"
	},
	"book_id": 8,
	"id": "3",
	"image_url": "/image/1.png",
	"page_number": 1,
	"text": "A man walk with a dog ",
	"user": {
		"id": 1,
		"username": "jesse1"
	},
	"user_id": 1
}
```


## 其餘可能會用到的API或是方便測試的API，不需要token
### GET   /user
可以得知所有帳號

### GET   /user/<user_id>
可以得知創建的特定帳號

### DELETE   /user/<user_id>
可以刪除創建的特定帳號

### GET   /book
可以得知所有書

### DELETE   /book/<book_id>
可以刪除創建的特定書的內容

### GET   /page
可以得知所有頁面

### GET   /page/<page_id>
可以得知創建的特定頁面

### DELETE   /page/<page_id>
可以刪除創建的特定頁面
