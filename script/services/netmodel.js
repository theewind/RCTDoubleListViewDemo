
//this file is generated, never modify this mannualy

var models = {
	"ResultList":{
			"recordCount": "int",
			"startIndex": "int",
			"isEnd": "boolean",
			"nextStartIndex": "int",
			"emptyMsg": "string",
			"queryID": "string"
	},
	"Pair":{
			"uid": "string",
			"name": "string",
			"type": "int"
	},
	"Shop":{
			"isRenovationSelectiveShop": "boolean",
			"naviUrl": "string",
			"containMeituan": "boolean",
			"shopPositionInfo": "ShopDisplayTag",
			"shopExtraTags": "UnClickEntity[]",
			"shopStateInformation": "ShopDisplayTag[]",
			"phoneTip": "string",
			"recommendReason": "ShopDisplayTag",
			"hasMeiTuanDeal": "boolean",
			"shareContent": "string",
			"rankInfo": "string",
			"branchInfo": "string",
			"chainTag": "string",
			"shopExtraInfo": "ShopExtraInfo",
			"cityName": "string",
			"isWedSelectiveShop": "boolean",
			"isHospitalQueueable": "boolean",
			"nearbyTransport": "string",
			"arrived": "boolean",
			"wished": "boolean",
			"shopStatusTag": "ShopDisplayTag",
			"extSourceNameText": "string",
			"extSourceId": "string",
			"extSourceName": "string",
			"certifiedHairDresserInfo": "string",
			"hasCarMoPay": "boolean",
			"bookType": "string",
			"isBanquetShop": "boolean",
			"isEduClassTogether": "boolean",
			"feastInfo": "ClickEntity",
			"statusText": "string",
			"infraList": "UnClickEntity[]",
			"viewType": "int",
			"shopDealInfos": "ShopDealInfo[]",
			"tagList": "ShopDisplayTag[]",
			"recommendDishUrl": "string",
			"saleable": "boolean",
			"rentable": "boolean",
			"hasBankCard": "boolean",
			"communtiyService": "ShopServiceInfo[]",
			"communityDesc": "CommunityDesc",
			"starGrade": "string",
			"geoPoint": "GeoPoint",
			"isToHomeShop": "boolean",
			"dDBookable": "boolean",
			"shopServiceInfoDoList": "ShopServiceInfo[]",
			"shopStyle": "ShopStyle.json",
			"isOrderDish": "boolean",
			"shopNearby": "ShopNearby[]",
			"rank": "ClickEntity",
			"desc": "string",
			"takeOrder": "TakeOrder",
			"friendsVisitInfo": "string",
			"hotelInfo": "ShopHotelInfo",
			"overseaBigPic": "string",
			"addressCard": "AddressCard",
			"oriName": "string",
			"verticalChannelBookable": "boolean",
			"hasMultiPic": "boolean",
			"activity": "ShopActivity[]",
			"hotelRankTag": "string",
			"advancedPics": "AdvancedPic[]",
			"isQueueable": "boolean",
			"ktvBookable": "boolean",
			"isForeignShop": "boolean",
			"starTips": "string",
			"hasPay": "boolean",
			"matchText": "string",
			"distanceText": "string",
			"fullShopName": "string",
			"branchCounts": "int",
			"isAdShop": "boolean",
			"hotelPromoList": "string[]",
			"source": "string",
			"reviewCount": "int",
			"uid": "int",
			"name": "string",
			"branchName": "string",
			"altName": "string",
			"shopPower": "int",
			"shopType": "int",
			"avgPrice": "int",
			"priceText": "string",
			"cityID": "int",
			"phoneNo": "string",
			"address": "string",
			"crossRoad": "string",
			"latitude": "double",
			"longitude": "double",
			"categoryID": "int",
			"categoryName": "string",
			"regionID": "int",
			"regionName": "string",
			"promo": "Promo",
			"promos": "Promo[]",
			"card": "string",
			"defaultPic": "string",
			"score1": "int",
			"score2": "int",
			"score3": "int",
			"scoreRatio1": "int",
			"scoreRatio2": "int",
			"scoreRatio3": "int",
			"scoreText": "string",
			"dishTags": "string",
			"writeUp": "string",
			"extra": "Pair[]",
			"campaign": "Campaign",
			"deals": "DealList",
			"groupID": "int",
			"branchIDs": "string",
			"checkInServerVerify": "boolean",
			"status": "int",
			"isLandMark": "boolean",
			"landMarkId": "int",
			"floorNum": "int",
			"floorLabel": "string",
			"landmarkName": "string",
			"landmarkShopID": "int",
			"coordX": "double",
			"coordY": "double",
			"polygon": "string",
			"mCStatus": "MCStatus",
			"authorityLabel": "string",
			"authorityLabelType": "int",
			"isRateFromDP": "boolean",
			"isDishMenu": "boolean",
			"shopView": "string",
			"announce": "string",
			"shopMemberCardID": "int",
			"shopPhotoCategory": "ShopPhotoCategory[]",
			"cooperationInfo": "string",
			"recommends": "string",
			"recommendIcon": "string",
			"tourist": "TouristInfo",
			"commendReason": "string",
			"picCount": "int",
			"phoneNos": "string[]",
			"ticketBookable": "boolean",
			"publicTransit": "string",
			"isNewShop": "boolean",
			"hasSeeAlsoShops": "boolean",
			"hotelBooking": "boolean",
			"weddingBookable": "boolean",
			"weddingTips": "string",
			"movieBookable": "boolean",
			"scoreEx1": "string",
			"scoreEx2": "string",
			"scoreEx3": "string",
			"storeCardGroupList": "StoreCardGroup[]",
			"hotelPromoTag": "string",
			"hasTakeaway": "boolean",
			"oriLatitude": "double",
			"oriLongitude": "double",
			"likedActivity": "LikedActivity",
			"price": "int",
			"hasMOPay": "boolean",
			"hasPromo": "boolean",
			"extraJson": "ShopExtra.json",
			"districtName": "string",
			"isHotelFull": "boolean",
			"hotelDealList": "DealList",
			"otaHotelPriceList": "HotelDetail[]",
			"marketPrice": "int",
			"hasDeals": "boolean",
			"shopPromos": "ShopPromo[]",
			"voteTotal": "int",
			"hotelJson": "string",
			"bookable": "boolean",
			"shopTotalSales": "int"
	},
	"ShopList":{
			"list": "Shop[]"
	},
	"ReviewList":{
			"globalReviewCount": "int",
			"bookingReviewCount": "int",
			"oTATagName": "string",
			"otaID": "int",
			"isOverseaCity": "boolean",
			"oTAReviewUrl": "string",
			"avgScore": "double",
			"oTAScoreList": "OTAScoreDo[]",
			"scoreList": "ScoreItemDo[]",
			"reviewAbstractList": "ReviewAbstract[]",
			"friendReviewList": "Review[]",
			"ugcReportLink": "Link",
			"list": "Review[]",
			"ownerReview": "Review",
			"relativeShop": "Shop[]",
			"reviewCount": "Pair[]",
			"reviewFilterNavs": "ReviewFilter[]"
	},
	"SimpleMsg":{
			"errorMsg": "string",
			"errorCode": "int",
			"returnID": "int",
			"statusCode": "int",
			"title": "string",
			"content": "string",
			"icon": "int",
			"flag": "int",
			"data": "string"
	},
	"SuccessMsg":{

	},
	"Dish":{
			"uid": "int",
			"name": "string",
			"defaultPic": "ShopPhoto",
			"count": "int"
	},
	"Link":{
			"url": "string",
			"name": "string"
	},
	"SearchShopApiResult":{
			"navigationTitles": "string",
			"specialCategoryFilterNavi": "FilterNavi",
			"hideAddShop": "boolean",
			"searchKTVAdResult": "KTVAdGroupWidget",
			"searchBannerResult": "SearchBannerResult",
			"nearbyHeadlineShops": "Shop[]",
			"guideKeywordResult": "GuideKeywordResult",
			"filterNavi": "FilterNavi",
			"operatingLocation": "PicLink[]",
			"searchDirectZoneResult": "SearchDirectZoneResult",
			"currentMetro": "Metro",
			"globalSearchResult": "GlobalSearchResult",
			"searchResultExtraInfo": "SearchResultExtraInfo.json",
			"extSearchResultType": "int",
			"selectedListUrl": "string",
			"selectedDeal": "PicLink",
			"extSearchResult": "ExtSearchRecord[]",
			"currentFloor": "Pair",
			"floorNavs": "Pair[]",
			"currentRegion": "Region",
			"currentCategory": "Category",
			"moreHotelsEntrance": "Pair",
			"recResultCount": "int",
			"targetType": "int",
			"targetInfo": "string",
			"topMallCount": "int",
			"keywordExtendTips": "string",
			"keywordExtendUrl": "string",
			"keywordInfo": "string",
			"categoryNavs": "Category[]",
			"regionNavs": "Region[]",
			"filterNavs": "Pair[]",
			"sortNavs": "Pair[]",
			"rangeNavs": "Pair[]",
			"metroNavs": "Metro[]",
			"adShops": "Shop[]",
			"currentFilter": "Pair",
			"currentRange": "Pair",
			"currentSort": "Pair",
			"hasSearchDate": "boolean",
			"hasBookingInfoFilter": "boolean",
			"bannerList": "Banner[]",
			"selectNavs": "SelectNav[]",
			"currentSelect": "SelectNav",
			"hotelTuanInfoList": "HotelTuanInfo[]"
	},
	"BookingSearchShopResult":{
			"tagNavs": "Pair[]",
			"currentTag": "Pair",
			"switches": "BookingSwitch[]"
	},
	"Movie":{
			"showDateString": "string",
			"moviePower": "int",
			"boxOfficeRank": "BoxOfficeRankInfo",
			"highLight": "Cell",
			"trailerCount": "int",
			"buyTicketButtonText": "string",
			"buyTicketButtonStatus": "int",
			"screenPhotoCount": "int",
			"favCount": "int",
			"tags": "string[]",
			"rateCount": "int",
			"movieCastList": "MovieCast[]",
			"movieNewsList": "MovieNews[]",
			"movieEventList": "Cell[]",
			"flag": "int",
			"largeImage": "string",
			"screenPhotos": "MovieScreenPhoto[]",
			"trailers": "MovieTrailer[]",
			"discountDescList": "MovieDiscountDesc[]",
			"detailUrl": "string",
			"uid": "int",
			"name": "string",
			"grade": "string",
			"thumb": "string",
			"image": "string",
			"has3D": "boolean",
			"hasIMAX": "boolean",
			"des": "string",
			"director": "string",
			"mainPerformer": "string",
			"sort": "string",
			"minutes": "int",
			"area": "string",
			"showDate": "time",
			"msg": "string",
			"editionFlag": "int"
	},
	"TakeAwayShopList":{
			"multiFilters": "TaMultiFilter[]",
			"taBlocks": "TABlock[]",
			"taEntranceList": "TaEntrance[]",
			"currentMultiCategory": "Category",
			"multiCategoryNavs": "Category[]",
			"NewCategoryNavs": "Pair[]",
			"entranceType": "int",
			"richButtonList": "RichButton[]",
			"list": "TakeAwayShop[]",
			"currentMultiFilterIds": "string",
			"multiFilterNavs": "TAPair[]",
			"showTopEntrance": "boolean",
			"address": "string",
			"bannerList": "Banner[]",
			"myTakeawayUrl": "string",
			"filterNavs": "Pair[]",
			"categoryNavs": "Pair[]",
			"sortNavs": "Pair[]",
			"currentFilter": "Pair",
			"currentCategory": "Pair",
			"currentSort": "Pair",
			"wMLat": "double",
			"wMLng": "double"
	},
	"Hui":{
			"payShopId": "int",
			"displayJson": "string",
			"cut": "double",
			"full": "double",
			"discount": "double",
			"limitCount": "int",
			"huiType": "int",
			"desc": "string",
			"title": "string",
			"huiId": "int"
	},
	"MenuDish":{
			"categoryName": "string",
			"active": "boolean",
			"dishId": "int",
			"thumbUrl": "string",
			"tag": "int[]",
			"price": "string",
			"name": "string"
	},
	"FNWidget":{
			"showable": "boolean",
			"uRL": "string",
			"widgetName": "string"
	},
	"BaseCity":{
			"firstChar": "string",
			"isOversea": "boolean",
			"uid": "int",
			"name": "string"
	},
	"ViewList":{
			"groupVersion": "string",
			"tagNavis": "Navi[]",
			"headPicURL": "string",
			"screenings": "NaviTag[]",
			"list": "ViewItem[]",
			"naviBars": "Navi[]"
	},
	"HomeBaseUnit":{
			"buId": "string",
			"bizId": "string",
			"adId": "string",
			"gaLabel": "string",
			"adViewUrl": "string",
			"adClickUrl": "string",
			"cpmFeedback": "string"
	},
	"HomeClickUnit":{
			"tag": "string",
			"background": "string",
			"title": "string",
			"subTitle": "string",
			"schema": "string",
			"icon": "string"
	},
	"HomeBaseSection":{
			"sectionColor": "string",
			"sectionTitle": "string",
			"sectionType": "string"
	},
	"PlazaFeed":{
			"star": "int",
			"isElite": "boolean",
			"feedId": "int",
			"isTop": "boolean",
			"plazaPics": "PlazaPic[]",
			"content": "string",
			"isLike": "boolean",
			"likeCount": "int",
			"commentCount": "int",
			"time": "string",
			"user": "PlazaUser"
	},
	"PlazaUser":{
			"userLevel": "string",
			"isFollow": "boolean",
			"userTags": "string[]",
			"avatar": "string",
			"nick": "string",
			"userID": "int"
	},
	"HotelResult":{
			"msg": "string",
			"code": "int"
	},
	"PictureBaseInfo":{
			"picId": "int",
			"thumbUrl": "string",
			"url": "string"
	},
	"HUIJsMerchantDiscount":{
			"candidates": "HUIJsMerchantDiscount[]",
			"enabled": "boolean",
			"tipsText": "string",
			"discountAmountText": "string",
			"discountAmount": "double",
			"selected": "boolean",
			"count": "int",
			"unifiedId": "string",
			"productType": "int"
	},
	"HotelDetailList":{
			"list": "HotelDetail[]"
	},
	"ZeusResult":{
			"code": "int",
			"msg": "string"
	},
	"TaSkuDish":{
			"minFeeCalType": "int",
			"status": "int",
			"totalNum": "int",
			"limitNum": "int",
			"leastPurchaseNum": "int",
			"curPrice": "string",
			"origPrice": "string",
			"spec": "string",
			"skuId": "long"
	},
	"City":{
			"operateId": "int",
			"operate": "int",
			"url": "string",
			"uid": "int",
			"name": "string",
			"areaCode": "string",
			"isPromo": "boolean",
			"isTuan": "boolean",
			"lat": "double",
			"lng": "double",
			"firstChar": "int",
			"isTop": "boolean",
			"isMultiCategoryCity": "boolean",
			"isLocalPromoCity": "boolean",
			"isRankIndexCity": "boolean",
			"isLocalDish": "boolean",
			"flag": "int",
			"bound": "string",
			"categoryNum": "int",
			"serviceNum": "int",
			"isNearByEnabled": "boolean"
	},
	"Region":{
			"regionSearchKey": "string",
			"uid": "int",
			"name": "string",
			"parentID": "int",
			"lat": "double",
			"lng": "double",
			"firstChar": "int",
			"enName": "string",
			"parentEnName": "string",
			"count": "int",
			"regionType": "int"
	},
	"Category":{
			"link": "string",
			"label": "int",
			"isHotCategory": "boolean",
			"schema": "string",
			"uid": "int",
			"name": "string",
			"parentID": "int",
			"favIcon": "string",
			"distance": "int",
			"searchPara": "string",
			"highlight": "boolean",
			"enName": "string",
			"parentEnName": "string",
			"count": "int"
	},
	"ShopPhotoCategory":{
			"count": "int",
			"name": "string",
			"type": "int",
			"subCategoryList": "string[]"
	},
	"ShortReview":{
			"labelId": "int",
			"labelName": "string",
			"count": "int",
			"type": "int"
	},
	"Review":{
			"dishs": "string[]",
			"transReviewBody": "string",
			"reviewType": "int",
			"reviewHonour": "string",
			"shopName": "string",
			"abstractList": "string[]",
			"extInfoList": "ReviewExtInfo[]",
			"expenseInfoList": "ReviewExpense[]",
			"sourceUrl": "string",
			"sourceType": "int",
			"sourceName": "string",
			"likeUserName": "string[]",
			"uid": "int",
			"reviewBody": "string",
			"star": "int",
			"avgPrice": "int",
			"priceText": "string",
			"user": "UserProfile",
			"time": "time",
			"shopID": "int",
			"score1": "int",
			"score2": "int",
			"score3": "int",
			"shopTags": "string[]",
			"likesNum": "int",
			"isLiked": "boolean",
			"thumbnails": "string[]",
			"images": "string[]",
			"commentCount": "int",
			"tuanLinks": "Link[]",
			"reviewCount": "int",
			"canReply": "boolean",
			"type": "int"
	},
	"Promo":{
			"uid": "int",
			"promoTitle": "string",
			"sMSText": "string",
			"promoPhoto": "string",
			"shopID": "int",
			"shopName": "string",
			"beginTime": "time",
			"endTime": "time",
			"tag": "string",
			"downloadCount": "int",
			"latitude": "double",
			"longitude": "double",
			"downloadPhoto": "string",
			"shopIDs": "string",
			"flag": "int",
			"price": "double",
			"relevantPass": "RelevantPass",
			"desc": "string"
	},
	"PromoList":{
			"list": "Promo[]",
			"categoryNavs": "Category[]",
			"rangeNavs": "Pair[]",
			"currentRange": "Pair",
			"regionNavs": "Pair[]",
			"noResultTip": "string",
			"recommendPromo": "Promo[]",
			"recommendSource": "int"
	},
	"PromoBrand":{
			"uid": "int",
			"name": "string",
			"logo": "string",
			"descriptions": "string",
			"trafficUrl": "AdTrafficUrl"
	},
	"SearchShopResult":{
			"keywordInfo": "string",
			"categoryNavs": "Category[]",
			"regionNavs": "Region[]",
			"filterNavs": "Pair[]",
			"rangeNavs": "Pair[]",
			"currentFilter": "Pair",
			"currentRange": "Pair",
			"siftNavs": "Pair[]",
			"currentSift": "Pair",
			"searchTips": "string[]",
			"location": "Location",
			"drawSearchStartIndex": "int",
			"NewLotteryCount": "int"
	},
	"Location":{
			"lat": "double",
			"lng": "double",
			"offsetLat": "double",
			"offsetLng": "double",
			"address": "string",
			"geoRegionName": "string",
			"road": "string",
			"city": "City",
			"accuracy": "int",
			"source": "string",
			"region": "Region"
	},
	"UserProfile":{
			"constellation": "string",
			"birthday": "string",
			"homeTown": "int",
			"userLabel": "string[]",
			"userGrade": "UserGrade",
			"userTags": "string[]",
			"needSetAvatar": "boolean",
			"needSetName": "boolean",
			"bindingAccounts": "AccountBindResult",
			"userLevel": "UserLevel",
			"userID": "int",
			"nickName": "string",
			"avatar": "string",
			"userPower": "int",
			"cityID": "int",
			"isHoney": "boolean",
			"isInvited": "boolean",
			"isFans": "boolean",
			"token": "string",
			"time": "time",
			"level": "int",
			"score": "int",
			"checkInCount": "int",
			"badgeCount": "int",
			"honeyCount": "int",
			"fansCount": "int",
			"feedFlag": "int",
			"mayorCount": "int",
			"favoCount": "int",
			"reviewCount": "int",
			"photoCount": "int",
			"couponCount": "int",
			"email": "string",
			"snsNickName": "string",
			"snsImportedFlags": "int",
			"phoneNo": "string",
			"dCashCount": "int",
			"memberCardCount": "int",
			"NewToken": "string",
			"grouponPhone": "string",
			"grouponIsLocked": "boolean",
			"grouponFavoCount": "int",
			"gender": "int",
			"movieTicketCount": "int",
			"lotteryDealCount": "int",
			"tuanBalance": "string",
			"phone": "string",
			"isLocked": "boolean",
			"balance": "string",
			"favoriteCount": "int",
			"discountCount": "int",
			"supportOnekey": "boolean"
	},
	"UserList":{
			"list": "UserProfile[]"
	},
	"CheckIn":{
			"uid": "int",
			"user": "UserProfile",
			"shopID": "int",
			"shopName": "string",
			"address": "string",
			"star": "int",
			"tips": "string",
			"time": "time",
			"commentCount": "int",
			"thumbImage": "string",
			"image": "string",
			"thumbImages": "string[]",
			"images": "string[]",
			"isShared": "boolean",
			"queuing": "string",
			"count": "int",
			"keywords": "string[]",
			"comments": "Comment[]",
			"shopLat": "double",
			"shopLng": "double"
	},
	"CheckInList":{
			"list": "CheckIn[]",
			"filterList": "FilterItem[]",
			"currentFilter": "FilterItem",
			"myCheckin": "CheckIn"
	},
	"FilterItem":{
			"uid": "int",
			"name": "string"
	},
	"Suggest":{
			"hasMoPay": "boolean",
			"hasDeals": "boolean",
			"icon": "string",
			"desc": "string",
			"templateid": "string",
			"displayInfo": "string",
			"relevantwordList": "Pair[]",
			"keyword": "string",
			"count": "int",
			"value": "string",
			"url": "string",
			"suggestType": "int"
	},
	"SuggestList":{
			"directZoneResult": "DirectZoneResult",
			"list": "Suggest[]"
	},
	"FavoriteShop":{
			"regionName": "string",
			"uid": "int",
			"time": "time",
			"type": "string",
			"categoryName": "string",
			"cityName": "string"
	},
	"FavoriteShopList":{
			"list": "FavoriteShop[]"
	},
	"FormItem":{
			"title": "string",
			"value": "string",
			"type": "int",
			"item": "Pair[]",
			"param": "string"
	},
	"ReviewForm":{
			"leadTips": "string",
			"tuanTitle": "string",
			"shopPhotoCategory": "string[]",
			"photos": "UploadedPhotoInfo[]",
			"bannerInfo": "string",
			"tagDialogTitle": "string",
			"shopName": "string",
			"jsFunctions": "string",
			"reviewBodyHint": "string",
			"list": "FormItem[]",
			"reviewId": "int",
			"reviewBodyMinCount": "int"
	},
	"ShopPhoto":{
			"isFullPic": "boolean",
			"uid": "int",
			"name": "string",
			"thumbUrl": "string",
			"url": "string",
			"user": "UserProfile",
			"time": "time",
			"star": "int",
			"price": "int",
			"tag": "int",
			"tagName": "string",
			"shopID": "int",
			"priceText": "string",
			"isOfficial": "boolean"
	},
	"ShopPhotoList":{
			"shopMenu": "ShopMenuAlbum",
			"isOfficialFullPic": "boolean",
			"list": "ShopPhoto[]",
			"relativeShop": "Shop[]",
			"photoTagList": "string[]",
			"officialName": "string",
			"officialImgUrl": "string"
	},
	"UserPhoto":{
			"shopPhoto": "ShopPhoto[]",
			"shop": "Shop"
	},
	"DishList":{
			"list": "Dish[]",
			"couponOriPrice": "double",
			"couponCurPrice": "double",
			"dealID": "int"
	},
	"LocalDish":{
			"shopID": "int",
			"shopName": "string",
			"latitude": "double",
			"longitude": "double"
	},
	"Comment":{
			"uid": "int",
			"user": "UserProfile",
			"replyToUserName": "string",
			"content": "string",
			"time": "time"
	},
	"CommentList":{
			"list": "Comment[]",
			"checkIn": "CheckIn"
	},
	"Badge":{
			"memo": "string",
			"rewards": "Pair[]",
			"rewardsExpired": "boolean",
			"enableOffline": "boolean",
			"uid": "int",
			"title": "string",
			"text": "string",
			"thumbImage": "string",
			"image": "string",
			"active": "boolean"
	},
	"Notification":{
			"uid": "int",
			"userId": "int",
			"name": "string",
			"image": "string",
			"content": "string",
			"contentStyle": "int",
			"quote": "string",
			"actions": "Pair[]",
			"time": "time",
			"isRead": "boolean",
			"type": "int",
			"subType": "int",
			"desc": "string"
	},
	"NotificationList":{
			"list": "Notification[]"
	},
	"HoneyRequest":{
			"user": "UserProfile",
			"time": "time",
			"memo": "string"
	},
	"Campaign":{
			"uid": "int",
			"title": "string",
			"content": "string",
			"logoUrl": "string",
			"url": "string",
			"beginTime": "time",
			"endTime": "time",
			"status": "int"
	},
	"Mayor":{
			"shop": "Shop",
			"time": "time"
	},
	"Deal":{
			"categoryKeys": "string",
			"costSpan": "string",
			"effectSpan": "string",
			"applePaySetupEnabled": "boolean",
			"applePayEnabled": "boolean",
			"dealStyle": "DealStyle",
			"hint": "string",
			"productTitle": "string",
			"goodShopContent": "string",
			"goodShopTitle": "string",
			"isGoodShop": "boolean",
			"abstracts": "Cell[]",
			"detailUrl": "string",
			"discountDesc": "string",
			"distance": "string",
			"reviewRatio": "string",
			"salesTag": "string",
			"salesDesc": "string",
			"extraRecommendReason": "string",
			"isAutoRefund": "boolean",
			"overdueAutoRefund": "boolean",
			"hui": "Hui",
			"dealChannelTags": "string[]",
			"detailConfig": "DealDetailConfig",
			"briefTitle": "string",
			"bookingInfoList": "HotelDealGroupBookingInfo[]",
			"isHotelBookable": "boolean",
			"calendar": "DealCalendar",
			"recommendReasons": "string[]",
			"jumpFlag": "int",
			"jumpUrl": "string",
			"airHotelType": "int",
			"dealChannel": "int",
			"uid": "int",
			"title": "string",
			"contentTitle": "string",
			"photo": "string",
			"count": "int",
			"price": "double",
			"memo": "string",
			"latitude": "double",
			"longitude": "double",
			"shortTitle": "string",
			"bigPhoto": "string",
			"originalPrice": "double",
			"categoryID": "int[]",
			"regionID": "int[]",
			"regionName": "string",
			"status": "int",
			"remainCount": "int",
			"shopIDs": "string",
			"time": "time",
			"detailPhotos": "string[]",
			"extra": "Pair[]",
			"dealID": "int",
			"discount": "double",
			"detailInfo": "Pair[]",
			"dealComments": "DealComment[]",
			"dealSelectList": "DealSelect[]",
			"dealType": "int",
			"canUseBalance": "boolean",
			"canUseDiscount": "boolean",
			"regionList": "Region[]",
			"categoryList": "Category[]",
			"link": "string",
			"dealSubType": "int",
			"canRefund": "boolean",
			"buyLimit": "int",
			"deliveryType": "Pair[]",
			"hasReceipt": "boolean",
			"buyMixCount": "int",
			"interested": "boolean",
			"isLimitPerUser": "boolean",
			"tuanRemindStatus": "int",
			"tag": "int",
			"isMemberCard": "boolean",
			"productType": "int",
			"structDetailInfo": "Pair[]",
			"structExtra": "Pair[]",
			"help": "Pair",
			"eventTags": "int",
			"expirationText": "string",
			"recommendReason": "string",
			"eventList": "Event[]",
			"structedDetails": "Pair[]",
			"reservation": "Reservation",
			"dealTitle": "string",
			"dealTitlePrefix": "string",
			"totalReview": "string",
			"totalReviewRecommend": "string"
	},
	"DealList":{
			"tagNavis": "Navi[]",
			"dealType": "int",
			"viewItems": "ViewItem[]",
			"naviBars": "Navi[]",
			"shopAggLimit": "int",
			"moreUrl": "string",
			"list": "Deal[]",
			"revision": "int",
			"link": "string",
			"buyLink": "string",
			"selectLink": "string",
			"detailLink": "string",
			"regionNavs": "Region[]",
			"categoryNavs": "Category[]",
			"filterNavs": "Pair[]",
			"subwayNavs": "Region[]",
			"distance": "int",
			"screeningList": "NaviTag[]",
			"queryId": "string",
			"dealListType": "int",
			"recommendDeals": "RecommendDeals",
			"events": "Cell[]",
			"hotEvents": "Cell[]",
			"selectedRegion": "Region",
			"shopAggDeals": "ShopAggDealGroup[]",
			"aggregationType": "string"
	},
	"Coupon":{
			"isShowCode": "boolean",
			"detailUrl": "string",
			"usageHint": "Pair[]",
			"uid": "int",
			"title": "string",
			"isExpired": "boolean",
			"isUsed": "boolean",
			"date": "time",
			"code": "Pair",
			"regionName": "string",
			"relativeDeal": "Deal",
			"orderId": "int",
			"relevantPass": "RelevantPass",
			"relevantShop": "Shop[]",
			"isMemberCard": "boolean",
			"relativeCard": "RelativeCard",
			"dealSelectId": "int",
			"status": "int",
			"refundInfo": "ReceiptRefundInfo"
	},
	"CouponList":{
			"list": "Coupon[]",
			"link": "string"
	},
	"ThirdUserAuth":{
			"auth": "string",
			"url": "string"
	},
	"Box":{
			"name": "string",
			"count": "int",
			"label": "string",
			"action": "string",
			"icon": "string"
	},
	"Order":{
			"bizTags": "string[]",
			"statusBgColor": "string",
			"statusText": "string",
			"orderReviewData": "OrderReviewData",
			"refundTip": "string",
			"defaultReceiveDate": "time",
			"shipmentStatus": "int",
			"refundHints": "string[]",
			"uid": "int",
			"title": "string",
			"count": "int",
			"photo": "string",
			"price": "double",
			"statusMemo": "string",
			"time": "time",
			"extraTitle": "string",
			"extra": "Pair[]",
			"unitPrice": "string",
			"shipment": "string",
			"logisticsInfo": "Pair[]",
			"dealType": "int",
			"status": "int",
			"totalPrice": "string",
			"deliveryType": "Pair",
			"discount": "Discount",
			"discountList": "Discount[]",
			"delivery": "Delivery",
			"invoiceTitle": "string",
			"privilege": "Pair[]",
			"refundStatus": "int",
			"relativeDeal": "Deal",
			"canDelete": "boolean",
			"couponList": "Coupon[]",
			"shareList": "Share[]",
			"buyInfo": "Pair[]",
			"displayBuyInfoOnSuccess": "boolean"
	},
	"OrderList":{
			"list": "Order[]",
			"link": "string",
			"isShaiDanEnabled": "boolean"
	},
	"ShakeShop":{
			"shop": "Shop",
			"reviews": "Review[]",
			"dishes": "string",
			"tips": "string",
			"checkInID": "int"
	},
	"DealComment":{
			"comment": "string",
			"userName": "string",
			"userTitle": "string",
			"userId": "int"
	},
	"DealSelect":{
			"bookingDefaultInfo": "HotelBookingDefaultInfo",
			"uid": "int",
			"title": "string",
			"price": "string",
			"count": "int",
			"status": "int",
			"dealType": "int",
			"groupTitle": "string"
	},
	"Delivery":{
			"uid": "int",
			"receiver": "string",
			"phoneNo": "string",
			"province": "int",
			"city": "int",
			"county": "int",
			"address": "string",
			"postCode": "string",
			"showAddress": "string",
			"isDefault": "boolean",
			"memo": "string"
	},
	"Discount":{
			"priceLimit": "double",
			"wxStatus": "int",
			"uid": "int",
			"title": "string",
			"date": "time",
			"price": "string",
			"beginDate": "time",
			"addDate": "time",
			"content": "string",
			"useLimit": "string",
			"expired": "boolean"
	},
	"LocateResult":{
			"locations": "Location[]",
			"uUID": "string"
	},
	"SplashPic":{
			"adUrl": "string",
			"beginTime": "long",
			"picId": "int",
			"picUrl": "string",
			"expiredTime": "long",
			"picShowTime": "int",
			"adTrafficUrl": "AdTrafficUrl"
	},
	"AlbumInfo":{
			"name": "string",
			"defaultPhotoUrl": "string",
			"otherInfoList": "Pair[]"
	},
	"EBizPromo":{
			"uid": "int",
			"title": "string",
			"content": "string",
			"picUrl": "string",
			"beginDate": "time",
			"endDate": "time"
	},
	"MessageCount":{
			"fansCount": "int",
			"recommendGrouponCount": "int",
			"notificationCount": "int",
			"alertCount": "int",
			"subscribeCount": "int",
			"addReviewCampaignCount": "int",
			"noticeCount": "int",
			"letterCount": "int",
			"commentCount": "int"
	},
	"ValidationCode":{
			"image": "string[]",
			"ticket": "string"
	},
	"FlavourInfo":{
			"title": "Pair",
			"items": "FlavourItem[]"
	},
	"FlavourItem":{
			"name": "string",
			"defaultPic": "string",
			"url": "string",
			"desc": "string",
			"uid": "int",
			"subDesc": "string"
	},
	"CheckInTopic":{
			"uid": "int",
			"count": "int",
			"title": "string",
			"desc": "string",
			"beginDate": "time",
			"endDate": "time",
			"isNew": "boolean",
			"picUrl": "string[]",
			"linkDetail": "Pair"
	},
	"TouristInfo":{
			"recommends": "string",
			"recommendIcon": "string",
			"searchCategory": "Pair[]",
			"NewPage": "boolean",
			"isHotel": "boolean"
	},
	"ReviewEncourage":{
			"encourageStyle": "int",
			"scoreState": "int",
			"link": "string",
			"linkText": "string",
			"encourageTips": "string[]",
			"content": "string",
			"highlightWord": "string"
	},
	"SceneryTicketList":{
			"list": "SceneryTicket[]",
			"notices": "Pair[]",
			"aheadDays": "int",
			"aheadTime": "string"
	},
	"SceneryTicket":{
			"uid": "int",
			"name": "string",
			"price": "int",
			"tCPrice": "int",
			"policy": "string",
			"address": "string",
			"minT": "int",
			"maxT": "int",
			"pMode": "string",
			"descriptions": "Pair[]",
			"url": "string"
	},
	"GuestInfo":{
			"name": "string",
			"phoneNo": "string",
			"idNo": "string"
	},
	"RankIndex":{
			"uid": "string",
			"name": "string",
			"type": "int",
			"url": "string"
	},
	"HomePageIndex":{
			"hotName": "string",
			"id": "int",
			"icon": "string",
			"title": "string",
			"url": "string",
			"type": "int"
	},
	"HomePageIndexList":{
			"list": "HomePageIndex[]"
	},
	"RelevantPass":{
			"serialNumber": "string",
			"typeIdentifier": "string"
	},
	"ReviewFilter":{
			"uid": "int",
			"name": "string",
			"count": "int",
			"parentID": "int"
	},
	"Metro":{
			"regionType": "int",
			"uid": "int",
			"name": "string",
			"parentID": "int",
			"lat": "double",
			"lng": "double"
	},
	"HotelDetail":{
			"otaID": "int",
			"oTARefundList": "string[]",
			"oTAPromoList": "string[]",
			"name": "string",
			"url": "string",
			"hotelExtInfo": "string[]",
			"price": "double",
			"priceText": "string",
			"tagList": "HotelBookingTag[]",
			"campaignList": "HotelCampaign[]"
	},
	"BookingHotelResult":{
			"hotelAnnounce": "string",
			"showNum": "int",
			"oTAPromoInfoList": "HotelPromoInfo[]",
			"taxesTips": "string"
	},
	"HotelCampaign":{
			"title": "string",
			"isHighlight": "boolean"
	},
	"WeddingPromo":{
			"title": "string",
			"content": "string"
	},
	"WeddingInfo":{
			"isBooking": "boolean",
			"isSelectiveShop": "boolean",
			"weddingPromoList": "WeddingPromo[]"
	},
	"HotelBookingTag":{
			"type": "int",
			"title": "string"
	},
	"HotelInfo":{
			"facilityList": "HotelFacility[]",
			"keyFacilityList": "HotelFacility[]",
			"funFacilityList": "string[]",
			"phoneList": "string[]",
			"introduce": "string",
			"policy": "HotelPolicy",
			"trafficList": "HotelTraffic[]",
			"landmarkList": "HotelLandmark[]",
			"openningTime": "string"
	},
	"HotelFacility":{
			"icon": "string",
			"title": "string"
	},
	"HotelPolicy":{
			"content": "string",
			"iconList": "string[]"
	},
	"HotelTraffic":{
			"title": "string",
			"distance": "string",
			"content": "string"
	},
	"HotelLandmark":{
			"title": "string",
			"distance": "string"
	},
	"ShopFeatureTag":{
			"tagId": "int",
			"pictureUrl": "string",
			"title": "string"
	},
	"TaggedReview":{
			"userName": "string",
			"reviewBody": "string",
			"addTime": "time"
	},
	"ShopFeatureTagReview":{
			"featureTag": "ShopFeatureTag",
			"taggedReviews": "TaggedReview[]"
	},
	"Route":{
			"type": "int",
			"taxiCost": "string",
			"distance": "int",
			"paths": "Path[]"
	},
	"Path":{
			"title": "string",
			"distance": "int",
			"duration": "int",
			"steps": "Step[]"
	},
	"Step":{
			"roadName": "string",
			"direction": "string",
			"instruction": "string",
			"polyline": "string",
			"type": "int",
			"tips": "string"
	},
	"HotAd":{
			"title": "string",
			"items": "HotItem[]"
	},
	"HotItem":{
			"adId": "string",
			"bizId": "string",
			"feedback": "string",
			"richTitle": "string",
			"title": "string",
			"subTitle": "string",
			"icon": "string",
			"schema": "string",
			"adTrafficUrl": "AdTrafficUrl"
	},
	"NotificationSubType":{
			"name": "string",
			"typeID": "int"
	},
	"ReviewComment":{
			"uid": "int",
			"userID": "int",
			"userName": "string",
			"replyToUserName": "string",
			"content": "string",
			"time": "time",
			"commentType": "int"
	},
	"NotificationForm":{
			"title": "string",
			"switchList": "Switch[]"
	},
	"Switch":{
			"uid": "int",
			"name": "string",
			"status": "boolean",
			"onDesc": "string",
			"offDesc": "string",
			"image": "string"
	},
	"StoreCardGroup":{
			"title": "string",
			"iDList": "string[]"
	},
	"RecommendDealResult":{
			"showLimit": "int",
			"headBannerUrl": "string",
			"headBannerInfo": "string",
			"list": "RecommendDeal[]",
			"banner": "Banner"
	},
	"RecommendDeal":{
			"h5ActionUrl": "string",
			"branchName": "string",
			"name": "string",
			"commendReason": "string",
			"reviewToken": "string",
			"activity": "string",
			"shopPicUrl": "string",
			"uid": "int",
			"title": "string",
			"price": "string",
			"image": "string",
			"shopID": "int",
			"shopName": "string"
	},
	"LocalPush":{
			"triggerType": "int",
			"triggerTime": "long",
			"uid": "int",
			"startTime": "long",
			"endTime": "long",
			"content": "string",
			"url": "string",
			"showType": "int"
	},
	"NotificationSettingResult":{
			"notificationSwitches": "NotificationSwitch[]",
			"alert": "Switch",
			"mark": "Switch"
	},
	"SnsStatus":{
			"isBind": "boolean",
			"isExpired": "boolean"
	},
	"LikedActivity":{
			"title": "string",
			"keyword": "string",
			"images": "string[]",
			"url": "string"
	},
	"OpenPlatform":{
			"items": "OpenPlatformItem[]",
			"refreshOnResume": "boolean"
	},
	"OpenPlatformItem":{
			"cellName": "string",
			"title": "string",
			"subTitle": "string",
			"desc": "string",
			"icon": "string",
			"url": "string",
			"webkitControls": "boolean",
			"openExternalBrowser": "boolean",
			"requireLocation": "boolean",
			"requireLogin": "boolean",
			"utm": "string",
			"utmOnShow": "string"
	},
	"Mapping":{
			"host": "string",
			"version": "int",
			"type": "int",
			"mapping": "string"
	},
	"OrderCount":{
			"dot": "string",
			"title": "string",
			"tag": "string",
			"imageUrl": "string",
			"url": "string",
			"groupNum": "int",
			"index": "int"
	},
	"AlertMark":{
			"tab": "string",
			"tag": "string",
			"show": "boolean",
			"showText": "string"
	},
	"MOPayPromosDo":{
			"uniCashierUrl": "string",
			"activityDes": "string",
			"ticketText": "string",
			"businessType": "int",
			"payShowStatus": "int",
			"showStatus": "int",
			"title": "string",
			"offers": "OfferDo[]",
			"offerDiscounts": "OfferDiscountDo[]",
			"payType": "int"
	},
	"OfferDo":{
			"richDiscountTips": "string",
			"questionMark": "int",
			"richDesc": "string",
			"discountTips": "string",
			"tips": "string",
			"showPop": "int",
			"orderID": "int",
			"ruleDo": "RuleDo",
			"operateTip": "string",
			"detailDescs": "string[]",
			"statusDesc": "string",
			"grabbedDesc": "string",
			"uid": "int",
			"title": "string",
			"desc": "string",
			"status": "int",
			"inventory": "int",
			"isShow": "int",
			"inventoryStatus": "int"
	},
	"MOPaymentDo":{
			"waiterCommentSwitch": "int",
			"waiterCommentTitle": "string",
			"payOrderID": "int",
			"orderID": "int",
			"status": "int",
			"msg": "string",
			"mOPayContent": "string"
	},
	"MOPayOrderDo":{
			"refundOrderLink": "RefundOrderLink",
			"refundAmount": "double",
			"refundDetails": "string[]",
			"remainAmount": "double",
			"deductAmount": "double",
			"baseOrderId": "string",
			"serviceUrl": "string",
			"serializedId": "string",
			"orderRemarks": "string[]",
			"rightDos": "RightDo[]",
			"hasVoiceReport": "boolean",
			"pointMallDo": "PointMallDo",
			"orderDetailTipsDo": "OrderDetailTipsDo",
			"buffetDescs": "string[]",
			"shopPhones": "string[]",
			"operationBanners": "MOPayOperationBanner[]",
			"voucherSerials": "string[]",
			"repayUrl": "string",
			"merchantAmountString": "string",
			"payFailDescription": "string",
			"pointsEarned": "string",
			"userAmountString": "string",
			"huiReviewInfo": "HuiReviewInfo",
			"contactMerchantTip": "string",
			"noDiscountAmount": "double",
			"mobileNo": "string",
			"isHobbit": "int",
			"bizType": "int",
			"statusMsg": "string",
			"huiTicketShareDo": "HuiTicketShareDo",
			"merchantAmount": "double",
			"orderID": "int",
			"status": "int",
			"shopID": "int",
			"shopName": "string",
			"time": "time",
			"verifyStatus": "int",
			"serialNumber": "string",
			"oriAmount": "double",
			"currentAmount": "double",
			"saveAmount": "double",
			"discounts": "DiscountDo[]",
			"alertLoginTips": "string",
			"alertLoginLink": "LinkDo",
			"mOPayShare": "ShareDo",
			"banner": "TextBannerDo",
			"successMsg": "string",
			"errorMsg": "string"
	},
	"LinkDo":{
			"url": "string",
			"name": "string"
	},
	"ShareDo":{
			"btnText": "string",
			"desc": "string",
			"title": "string",
			"url": "string",
			"iconUrl": "string"
	},
	"TextBannerDo":{
			"text": "string",
			"url": "string"
	},
	"OfferDiscountDo":{
			"discountToken": "string",
			"payType": "int",
			"discounts": "DiscountDo[]",
			"jSFunction": "string"
	},
	"DiscountDo":{
			"status": "int",
			"defaultPayTip": "string",
			"type": "int",
			"saveAmount": "string"
	},
	"MOPayOrderListDo":{
			"nextComposeStartIndex": "string",
			"isComposeEnd": "string",
			"composeStartIndex": "string",
			"tips": "string",
			"alertLoginLink": "LinkDo",
			"recordCount": "int",
			"startIndex": "int",
			"isEnd": "boolean",
			"list": "MOPayOrderDo[]",
			"nextStartIndex": "int"
	},
	"MOPayPromo":{
			"tips": "string",
			"payType": "string",
			"type": "int",
			"needLogin": "boolean",
			"enableMOPay": "boolean",
			"loginUrl": "string",
			"errorTip": "string",
			"defaultPayTips": "string",
			"loadingTips": "string",
			"setting": "MOPaySetting[]"
	},
	"ShopPromo":{
			"uid": "int",
			"title": "string",
			"desc": "string",
			"status": "int",
			"tag": "string",
			"tips": "DefaultTip[]"
	},
	"DefaultTip":{
			"type": "int",
			"defaultPayTips": "string"
	},
	"MOPaySetting":{
			"type": "int",
			"title": "string",
			"loadingTips": "string",
			"defaultPayTips": "string",
			"errorTip": "string"
	},
	"MOPayment":{
			"orderID": "int",
			"mOPayContent": "string"
	},
	"MOPayOrder":{
			"orderID": "int",
			"status": "int",
			"shopID": "int",
			"shopName": "string",
			"time": "time",
			"verifyStatus": "int",
			"serialNumber": "string",
			"errorMsg": "string",
			"oriAmount": "double",
			"currentAmount": "double",
			"mOPayShare": "Share",
			"banner": "TextBanner"
	},
	"TextBanner":{
			"text": "string",
			"url": "string"
	},
	"Share":{
			"uid": "int",
			"title": "string",
			"url": "string",
			"iconUrl": "string",
			"type": "string",
			"num": "int",
			"shareBannerMsg": "string",
			"shareBannerImg": "string",
			"shareBannerButtonImg": "string",
			"shareMsg": "string",
			"shareImg": "string"
	},
	"SelectNav":{
			"filterId": "int",
			"name": "string",
			"imgs": "string[]"
	},
	"DiscountRange":{
			"msg": "string",
			"start": "double",
			"end": "double",
			"params": "string[]"
	},
	"Contribution":{
			"eventDate": "time",
			"msg": "string",
			"type": "int",
			"icon": "string"
	},
	"PromoInfo":{
			"icon": "string",
			"content": "string"
	},
	"HotelRoomDetail":{
			"roomTypeName": "string",
			"roomTypeExtInfo": "string",
			"roomInfo": "string",
			"payPolicy": "string",
			"specialActivaties": "string[]",
			"priceText": "string",
			"tax": "string",
			"cancelTitle": "string",
			"cancelContent": "string",
			"reFund": "string",
			"remains": "int",
			"status": "int",
			"bookingUrl": "string",
			"roomImage": "string",
			"imageList": "string[]",
			"roomDetailInfo": "string",
			"promoInfoList": "PromoInfo[]",
			"phone": "string"
	},
	"GroupedRoomType":{
			"roomTypeName": "string",
			"displayCount": "int",
			"roomIndexList": "int[]"
	},
	"HotelRoomResult":{
			"orderListUrl": "string",
			"promoInfoList": "HotelPromoInfo[]",
			"promoInfo": "HotelPromoInfo",
			"hotelRoomDetailList": "HotelRoomDetail[]",
			"announceList": "string",
			"tips": "string",
			"desc": "string",
			"infoSource": "string",
			"groupedRoomTypeList": "GroupedRoomType[]"
	},
	"FlavourDetail":{
			"title": "string",
			"titleIconUrl": "string",
			"type": "int",
			"items": "FlavourItem[]"
	},
	"BookingRecordFlowList":{
			"isReminded": "boolean",
			"isExpired": "boolean",
			"shouldShowFlow": "boolean",
			"tipTitle": "string",
			"tipContent": "string",
			"bookingRecordFlows": "BookingRecordFlow[]"
	},
	"IndexAdsDo":{
			"searhSuggest": "string",
			"title": "string",
			"recommendations": "HotItem[]",
			"ads": "HotItem[]"
	},
	"CategoryRecom":{
			"categoryRecomList": "Category[]",
			"categoryList": "Category[]"
	},
	"RegionRecom":{
			"regionRecomList": "Region[]",
			"regionList": "Region[]"
	},
	"Tag":{
			"icon": "string",
			"keyword": "string",
			"count": "int"
	},
	"TripIndex":{
			"title": "string",
			"mainList": "TripIndex[]",
			"extendList": "TripIndexItem[]"
	},
	"TripIndexItem":{
			"title": "string",
			"subTitle": "string",
			"image": "string",
			"url": "string"
	},
	"TravelRoute":{
			"icon": "string",
			"title": "string",
			"des": "string",
			"pois": "Link[]"
	},
	"CardItem":{
			"cardType": "int",
			"cardName": "string",
			"cardDesc": "string",
			"cardNum": "int",
			"cardUrl": "string",
			"imgUrl": "string",
			"show": "boolean",
			"showText": "string"
	},
	"HotelTuanInfo":{
			"title": "string",
			"price": "int",
			"url": "string"
	},
	"RedEnvelope":{
			"accountId": "string",
			"addTime": "time",
			"expiredTime": "time",
			"expired": "boolean",
			"amount": "double",
			"memo": "string",
			"remainDay": "int"
	},
	"MeShopInfo":{
			"shopId": "int",
			"shopName": "string",
			"shopBranchName": "string"
	},
	"MeDish":{
			"dishId": "int",
			"dishName": "string",
			"dishPrice": "string",
			"unit": "string",
			"dishPic": "string",
			"categoryId": "int",
			"descriptions": "string"
	},
	"MeCategory":{
			"categoryId": "int",
			"categoryName": "string",
			"parentCategoryId": "int",
			"limit": "int",
			"meDishList": "MeDish[]"
	},
	"MeDetailMenuInfo":{
			"brandExposer": "string",
			"menuType": "int",
			"vendor": "int",
			"categoryList": "MeCategory[]",
			"meShopInfo": "MeShopInfo",
			"showPic": "boolean"
	},
	"MeOrderedDish":{
			"dishId": "int",
			"dishName": "string",
			"dishPrice": "string",
			"categoryId": "int",
			"count": "int",
			"dishPic": "string",
			"active": "boolean"
	},
	"MeDetailOrderInfo":{
			"orderId": "string",
			"orderStatus": "int",
			"orderTime": "string",
			"meOrderedDishList": "MeOrderedDish[]",
			"seat": "string",
			"meOrderDocket": "MeOrderDocket",
			"meShopInfo": "MeShopInfo",
			"meOperateAction": "MeOperateAction",
			"brandExposer": "string",
			"orderPrice": "string",
			"submitFailDishList": "MeOrderedDish[]"
	},
	"MeOrderDocket":{
			"statusDocket": "string",
			"orderTip": "string",
			"orderTipBattle": "string"
	},
	"MeOperateAction":{
			"canDelete": "boolean",
			"canModify": "boolean",
			"canSubmit": "boolean",
			"hasOrdered": "boolean"
	},
	"FindCategory":{
			"url": "string",
			"iconUrl": "string",
			"name": "string",
			"desc": "string",
			"subCategoryList": "FindSubCategory[]",
			"type": "int"
	},
	"FindSubCategory":{
			"url": "string",
			"iconUrl": "string",
			"name": "string"
	},
	"ShopInfoItem":{
			"title": "string",
			"subTitle": "string",
			"url": "string"
	},
	"Weather":{
			"guessUrl": "string",
			"guessName": "string",
			"ico": "string",
			"temperature": "string",
			"title": "string",
			"desc": "string",
			"festival": "string",
			"backpic": "string",
			"isNight": "boolean"
	},
	"GuessResult":{
			"thumbUrl": "string",
			"imageUrl": "string",
			"name": "string",
			"uid": "string",
			"type": "int",
			"descArr": "string[]",
			"descDraw": "string",
			"searchUrl": "string",
			"packageUrl": "string"
	},
	"BookingTip":{
			"bookingTitle": "string",
			"bookingBtnText": "string"
	},
	"PhotoTags":{
			"title": "string",
			"type": "int",
			"tagID": "int"
	},
	"WeddingHotelExtra":{
			"bookingUrl": "string",
			"seat": "string",
			"siteType": "string",
			"preferFlag": "int",
			"fuzzyUrl": "string",
			"fuzzyBtnTitle": "string",
			"fuzzyTitle": "string",
			"isShowFuzzy": "boolean",
			"promoSummaries": "WeddingHotelPromoSummary[]",
			"commision": "boolean",
			"defaultImg": "string",
			"imgCount": "int",
			"price": "string",
			"bookingInfo": "BookingTip",
			"cooperateType": "int",
			"hallCount": "int",
			"menuCount": "int",
			"officialTags": "PhotoTags[]",
			"userTags": "PhotoTags[]",
			"categoryID": "int",
			"categoryName": "string",
			"menuTags": "MenuTag[]"
	},
	"WeddingHotelHall":{
			"linkUrl": "string",
			"uid": "int",
			"img": "string",
			"name": "string",
			"table": "string",
			"extra": "string",
			"bookingButton": "string",
			"showBookingButton": "boolean"
	},
	"WeddingHotelShop":{
			"shopID": "int",
			"name": "string",
			"star": "int",
			"distance": "string",
			"price": "string",
			"shop": "Shop"
	},
	"NearbyWeddingHotelResult":{
			"recommendType": "int",
			"title": "string",
			"moreText": "string",
			"nearbyWeddingHotelList": "WeddingHotelShop[]"
	},
	"WeddingHotelBookingInfo":{
			"bookingDates": "string",
			"bookingUserMobile": "string",
			"bookingUserName": "string",
			"bookingUserGender": "int"
	},
	"MenuTag":{
			"menuID": "int",
			"tagName": "string"
	},
	"WeddingHotelMenu":{
			"desc": "string[]",
			"dishA": "string[]",
			"dishB": "string[]"
	},
	"TicketDetail":{
			"otaID": "int",
			"otaName": "string",
			"payMode": "string",
			"price": "double",
			"priceText": "string",
			"url": "string"
	},
	"HotelEventAd":{
			"title": "string",
			"subTitle": "string",
			"icon": "string",
			"schema": "string"
	},
	"WeddingPhoto":{
			"picID": "int",
			"thumbUrl": "string",
			"url": "string"
	},
	"WeddingProduct":{
			"pageHeadTitle": "string",
			"hasSoldNum": "string",
			"currentPrice": "string",
			"textBeforePrice": "string",
			"saleCountText": "string",
			"orderProcess": "boolean",
			"productType": "int",
			"bookingBtnLink": "string",
			"specialTag": "string",
			"showPropertiesModule": "boolean",
			"style": "string",
			"area": "int",
			"detailPicList": "string[]",
			"productList": "WeddingProduct[]",
			"productCategoryID": "int",
			"cityName": "string",
			"flags": "int",
			"bookingBtnText": "string",
			"showPriceType": "int",
			"coverStyleType": "int",
			"uid": "int",
			"name": "string",
			"defaultPic": "string",
			"price": "int",
			"originPrice": "int",
			"descriptions": "string[]",
			"coverPicList": "string[]",
			"properties": "Pair[]",
			"coverPicCount": "int",
			"detailPicCount": "int",
			"cooperateType": "int"
	},
	"WeddingProductList":{
			"textBeforePrice": "string[]",
			"redirectSchema": "string",
			"picWidth": "int",
			"picHeight": "int",
			"productCategoryId": "int",
			"priceNav": "ShopProductPriceNav[]",
			"topNav": "Pair[]",
			"available": "int",
			"crawlProductList": "WeddingProduct[]",
			"productCategoryList": "Pair[]",
			"list": "WeddingProduct[]",
			"coverStyleType": "int",
			"categoryDesc": "string",
			"type": "int"
	},
	"WeddingShopInfo":{
			"isWedHotel": "boolean",
			"jumpLink": "string",
			"headInfo": "string[]",
			"bookingUrl": "string",
			"seat": "string",
			"siteType": "string",
			"uiFlag": "int",
			"avgPrice": "int",
			"defaultImg": "string",
			"imgCount": "int",
			"bookingInfo": "BookingTip",
			"cooperateType": "int",
			"userTags": "PhotoTags[]",
			"reviewCount": "int"
	},
	"ExploreItem":{
			"content": "string",
			"distance": "int",
			"title": "string",
			"picUrl": "string",
			"url": "string"
	},
	"ShopTip":{
			"title": "string",
			"url": "string",
			"content": "string"
	},
	"AdTrafficUrl":{
			"clickUrl": "string",
			"viewUrl": "string"
	},
	"BeautyHairShop":{
			"headPhotoUrl": "string",
			"technicianTitle": "string",
			"addTechnicianUrl": "string",
			"shopBanners": "ShopBanner[]",
			"bookingProducts": "BeautyHairBookingProduct[]",
			"photos": "BeautyShopPhoto[]",
			"stylistCount": "int",
			"uid": "int",
			"hasPriceList": "boolean",
			"hasStylists": "boolean",
			"hasOfficialPic": "boolean",
			"bookable": "boolean",
			"displayPrice": "string",
			"photoUrls": "string[]",
			"priceListUrl": "string",
			"stylistsUrl": "string",
			"stylists": "BeautyStylist[]"
	},
	"BeautyStylist":{
			"certified": "int",
			"title": "string",
			"uid": "int",
			"name": "string",
			"photoUrl": "string",
			"detailPageUrl": "string",
			"star": "int"
	},
	"TimeQuantum":{
			"startHour": "int",
			"startMinute": "int",
			"endHour": "int",
			"endMinute": "int"
	},
	"BookingResult":{
			"refreshTimeInterval": "int",
			"canOrderDish": "boolean",
			"bookingResultActivity": "BookingUrlItemVO[]",
			"isSuccess": "int",
			"message": "string",
			"busyTimeList": "BusyTimePair[]",
			"bookingRecordID": "int",
			"htmlMessage": "string",
			"bookingRecordSerialNum": "string",
			"discount": "string",
			"record": "BookingRecord",
			"tips": "string[]",
			"validationStatus": "int",
			"advantages": "RsAdvantage[]",
			"deductionType": "int",
			"deductionButton": "string",
			"showAD": "boolean"
	},
	"BookingRecord":{
			"adInfo": "AdInfo[]",
			"isFlashBook": "boolean",
			"paymentInfo": "BookPaymentInfo",
			"canOrderDish": "boolean",
			"canQueue": "boolean",
			"cancelTip": "string",
			"prepayInfo": "RsRecrodPrepayInfo",
			"uid": "int",
			"shopID": "int",
			"shopName": "string",
			"userID": "int",
			"deviceID": "string",
			"clientUUID": "string",
			"name": "string",
			"gender": "int",
			"phone": "string",
			"insteadRecord": "boolean",
			"bookerName": "string",
			"bookerGender": "int",
			"bookerPhone": "string",
			"peopleNumber": "int",
			"positionType": "int",
			"compartmentID": "int",
			"bookingTime": "time",
			"status": "int",
			"shopAddress": "string",
			"shopContact": "string",
			"shopUrl": "string",
			"isActive": "boolean",
			"serialNumber": "string",
			"discountSN": "string",
			"note": "string[]",
			"creditScore": "int",
			"thisCreditScore": "int",
			"creditLevel": "int",
			"creditLevelIncrement": "int",
			"lotteryInfo": "LotteryInfo",
			"roomDetail": "string",
			"roomTip": "string",
			"rebateContent": "string[]",
			"grouponDetail": "GrouponDetail",
			"readStatus": "int",
			"feedbackArriveStatus": "int",
			"cornerMark": "int",
			"onlinePay": "OnlinePay",
			"paidCashInfo": "PaidCashInfo",
			"recordButton": "RecordButton",
			"discountInfo": "DiscountInfo",
			"appealInfo": "string",
			"recordTip": "string",
			"userRemark": "string",
			"activityInfo": "ActivityInfo",
			"isExpand": "boolean",
			"autoRefreshInterval": "int",
			"needAutoRefresh": "boolean",
			"needRequestMore": "boolean",
			"bookingRecordFlowList": "BookingRecordFlowListVO"
	},
	"Compartment":{
			"uid": "int",
			"minPeople": "int",
			"maxPeople": "int",
			"consumeMode": "int",
			"minPrice": "double",
			"exception": "string"
	},
	"BusyTimePair":{
			"compartmentID": "int",
			"busyTimeQuantum": "TimeQuantum"
	},
	"BookingRecordList":{
			"list": "BookingRecord[]",
			"note": "string[]",
			"creditInfo": "CreditInfo",
			"tel": "string",
			"levelTip": "string",
			"bindTip": "string",
			"bookingRecordCnt": "int"
	},
	"BookingConfig":{
			"shopNotice": "string",
			"orderCountTxt": "string",
			"submitBtnTxt": "string",
			"submitUrl": "string",
			"iconType": "int",
			"allPayConfigInfo": "BookAllPayConfigInfo",
			"isFlashBook": "boolean",
			"rsShopPrepayInfo": "RsShopPrepayInfo",
			"information": "string",
			"defaultBookingTime": "time",
			"roomList": "Room[]",
			"bookingBitMapList": "BookingBitMap[]",
			"timeInterval": "int",
			"compartmentStatus": "int",
			"defaultPeopleCount": "int",
			"peopleMaxCount": "int",
			"peopleMinCount": "int",
			"note": "string[]",
			"flag": "int",
			"promoList": "Promo[]",
			"lotteryTip": "string",
			"aheadDay": "int",
			"inDay": "int",
			"bannerList": "Banner[]",
			"insteadDoc": "string",
			"roomInfo": "SimpleRoom",
			"shopOrderCount": "int",
			"userRemarkSwitch": "int"
	},
	"Room":{
			"index": "int",
			"roomType": "int",
			"uid": "int",
			"name": "string",
			"minPeople": "int",
			"maxPeople": "int",
			"config": "RoomConfig[]"
	},
	"RoomConfig":{
			"roomTime": "TimeQuantum",
			"minPeople": "int",
			"maxPeople": "int",
			"consumeMode": "int",
			"minPrice": "double",
			"exception": "string"
	},
	"BookingBitMap":{
			"date": "time",
			"bitMap": "int[]"
	},
	"BookContext":{
			"cashierDeskType": "int",
			"serializedID": "string",
			"defaultBookingTimeHot": "boolean",
			"hasDiscount": "boolean",
			"bookCount": "int",
			"isThunder": "boolean",
			"bookingConfig": "BookingConfig",
			"bookingTips": "string",
			"rebateContent": "string",
			"iconList": "BookingDealIcon[]",
			"payType": "int",
			"payRecordID": "int"
	},
	"VCResult":{
			"status": "boolean",
			"reason": "string"
	},
	"BindResult":{
			"status": "boolean",
			"reason": "string"
	},
	"LotteryInfo":{
			"lotteryStatus": "int",
			"shortMessage": "string",
			"longMessage": "string",
			"url": "string",
			"awards": "LotteryAwardVO[]"
	},
	"CreditInfo":{
			"lastCreditLevel": "int",
			"lastCreditIncrement": "int",
			"warningType": "int",
			"warningMsg": "string"
	},
	"RsAdvantage":{
			"type": "int",
			"title": "string",
			"uid": "int"
	},
	"LotteryAwardVO":{
			"awardName": "string",
			"awardCode": "string",
			"descriptions": "string"
	},
	"GrouponBookingConfig":{
			"defaultBookingTime": "time",
			"bookingBitMapList": "BookingBitMap[]",
			"timeInterval": "int",
			"defaultPeopleCount": "int",
			"peopleMaxCount": "int",
			"peopleMinCount": "int",
			"grouponList": "GrouponDetail[]",
			"roomList": "Room[]",
			"aheadDay": "int",
			"inDay": "int"
	},
	"GrouponDetail":{
			"dealID": "int",
			"title": "string"
	},
	"BookingHoliday":{
			"day": "time",
			"title": "string"
	},
	"BookingDealIcon":{
			"type": "int",
			"content": "string"
	},
	"PaidCashInfo":{
			"consumptionAmountStr": "string",
			"prepayAmount": "string",
			"deductionAmountStr": "string",
			"paidAmountStr": "string",
			"paySuccess": "boolean",
			"paidAmount": "int",
			"deductionAmount": "int",
			"payShow": "string"
	},
	"OnlinePay":{
			"cashierDeskType": "int",
			"available": "boolean",
			"availableTime": "time",
			"startTime": "time",
			"deductionInfo": "string",
			"minPayAmount": "int",
			"maxPayAmount": "int"
	},
	"PayOrder":{
			"orderId": "int",
			"productID": "int",
			"productType": "int",
			"canUseBalance": "boolean",
			"canUseDiscount": "boolean",
			"userToken": "string"
	},
	"ShareTip":{
			"shareTitle": "string",
			"iconUrl": "string",
			"type": "int",
			"shareContent": "string",
			"shareLink": "string"
	},
	"PeriodBookInfo":{
			"extra": "string",
			"timeList": "long[]",
			"title": "string",
			"content": "string"
	},
	"RecordButton":{
			"cancelButton": "boolean",
			"deleteButton": "boolean",
			"modifyButton": "boolean",
			"reviewButton": "boolean",
			"pseudoLotteryButton": "boolean"
	},
	"DiscountInfo":{
			"hasDiscount": "boolean",
			"title": "string",
			"content": "string"
	},
	"SimpleRoom":{
			"descList": "RoomDescInfo[]",
			"minPeopleCountForRoom": "int",
			"consumptionDesc": "string"
	},
	"ActivityInfo":{
			"hasActivity": "boolean",
			"actTip": "string",
			"actTitle": "string",
			"actUrl": "string",
			"hasPrompt": "boolean",
			"promptTip": "string",
			"promptTitle": "string",
			"promptContent": "string"
	},
	"BookingRecordFlowListVO":{
			"isReminded": "boolean",
			"shouldShowFlow": "boolean",
			"tipTitle": "string",
			"tipContent": "string",
			"isExpired": "boolean",
			"bookingRecordFlows": "BookingRecordFlow[]"
	},
	"BookingRecordFlow":{
			"recordFlowTime": "string",
			"recordFlowTitle": "string",
			"recordFlowContent": "string"
	},
	"BookingSwitch":{
			"uid": "string",
			"name": "string",
			"on": "boolean"
	},
	"BookingFacadeVO":{
			"recommendShops": "RecommendedShopList[]",
			"bookingTime": "time",
			"bookingPerson": "int",
			"totalCount": "int",
			"activityItems": "BookingUrlItemVO[]",
			"categoryItems": "BookingUrlItemVO[]",
			"favRegions": "Region[]",
			"favCategories": "Category[]"
	},
	"BookingUrlItemVO":{
			"title": "string",
			"iconUrl": "string",
			"actionUrl": "string"
	},
	"BookingShop":{
			"hasBooked": "boolean",
			"hasOnlinePay": "boolean",
			"hasMemberCard": "boolean",
			"rebateTxt": "string"
	},
	"MCStatus":{
			"tabMsg": "string",
			"isMCShop": "boolean",
			"isMCUser": "boolean",
			"memberCardID": "int",
			"memberCardDesc": "string",
			"cardLevel": "int",
			"userLevel": "int",
			"thirdPartyType": "int",
			"navigateUrl": "string"
	},
	"Card":{
			"providerDesc": "string",
			"providerLogo": "string",
			"upgradeTips": "string",
			"maskPicUrl": "string",
			"memberCardID": "int",
			"title": "string",
			"subTitle": "string",
			"logo": "string",
			"bgImage": "string",
			"fontColor": "string",
			"shopID": "int",
			"userName": "string",
			"memberCardNO": "string",
			"distanceDesc": "string",
			"cardType": "int",
			"cardProductURL": "string",
			"shopTypeList": "ShopType[]",
			"floorList": "Floor[]",
			"productList": "Product[]",
			"productAList": "Product[]",
			"memberCardDesc": "string",
			"feedList": "Feed[]",
			"memberCardGroupID": "string",
			"isCustBgImage": "boolean",
			"qRCode": "string",
			"isQRCodeOn": "boolean",
			"weiboContent": "string",
			"weixinContent": "string",
			"region": "string",
			"category": "string",
			"joined": "boolean",
			"isNew": "boolean",
			"power": "int",
			"shopIDs": "string",
			"subCardList": "Card[]",
			"cardPoint": "CardPoint",
			"cardBadge": "CardBadge",
			"lat": "double",
			"lng": "double",
			"cardLevel": "int",
			"userCardLevel": "int",
			"cardScore": "CardScore",
			"productTypeList": "string",
			"thirdPartyType": "int",
			"navigateUrl": "string"
	},
	"CardScore":{
			"score": "string",
			"msg": "string",
			"scoreUrl": "string"
	},
	"CardList":{
			"list": "Card[]"
	},
	"Product":{
			"productID": "int",
			"productName": "string",
			"productDesc": "string",
			"productType": "int",
			"shopType": "int",
			"floor": "int",
			"productUrl": "string",
			"productLevel": "int",
			"price": "string",
			"oldPrice": "string",
			"productValue": "double",
			"productRemark": "string",
			"endDate": "time",
			"saleCount": "int",
			"warmNotice": "string",
			"helpNotice": "string",
			"validateDate": "time",
			"tips": "string"
	},
	"SimpleUser":{
			"userName": "string",
			"gender": "int",
			"birthday": "time",
			"qRCode": "string",
			"qRType": "int"
	},
	"ShopType":{
			"uid": "int",
			"name": "string",
			"shopCount": "int"
	},
	"Floor":{
			"uid": "int",
			"name": "string"
	},
	"CardShop":{
			"shopID": "int"
	},
	"Feed":{
			"feedID": "int",
			"memberCardID": "int",
			"memberCardTitle": "string",
			"memberCardSubtitle": "string",
			"category": "int",
			"feedTitle": "string",
			"feedDesc": "string",
			"releaseDate": "string",
			"feedImageURL": "string",
			"likeCount": "int",
			"isLike": "boolean",
			"status": "int",
			"feedLink": "string"
	},
	"SearchCardResult":{
			"categoryNavs": "Category[]",
			"regionNavs": "Region[]",
			"filterNavs": "Pair[]",
			"currentFilter": "Pair",
			"searchTipList": "Card[]",
			"cardList": "CardList"
	},
	"CardPoint":{
			"cardPointDesc": "string",
			"cardPointURL": "string",
			"cardPointTitle": "string"
	},
	"CardBadge":{
			"cardBadgeDesc": "string",
			"cardBadgeURL": "string",
			"cardBadgeTitle": "string",
			"cardBadgeTotal": "int",
			"cardBadgeBase": "int"
	},
	"UserValueLog":{
			"userValueLogId": "int",
			"changeDate": "string",
			"valueChangeAmount": "string",
			"valueChangeType": "int"
	},
	"MovieShowBlock":{
			"showDiscountIconDates": "time[]",
			"specifiedDate": "time",
			"movieTipList": "MovieTip[]",
			"movieDiscountIndexList": "MovieDiscountIndex[]",
			"movie": "Movie",
			"movieShowList": "MovieShow[]"
	},
	"MovieShow":{
			"movieShowStatus": "int",
			"defaultDiscountLabel": "string",
			"toastText": "string",
			"buyTicketButtonStatus": "int",
			"buyTicketButtonText": "string",
			"defaultDiscountID": "int",
			"buyTicketFlag": "int",
			"defaultDiscountPrice": "string",
			"uid": "int",
			"showTime": "time",
			"showEndTime": "time",
			"dimensional": "string",
			"language": "string",
			"price": "string",
			"hallName": "string",
			"thirdPartyName": "string",
			"thirdPartySeatUrl": "string"
	},
	"SeatingPlan":{
			"seatRecommendationList": "SeatRecommendation[]",
			"movieShowStatus": "int",
			"validateSeatAtClient": "boolean",
			"seatRowNameList": "SeatRowName[]",
			"seatCountLimit": "int",
			"pollingCreateOrderTimes": "int",
			"createOrderAsync": "boolean",
			"unpaidOrderTip": "string",
			"orderId": "int",
			"specialTips": "string",
			"skipComfirmOrder": "boolean",
			"height": "int",
			"width": "int",
			"seatList": "Seat[]",
			"rowNameList": "Seat[]",
			"maxRowIndex": "int",
			"maxColumnIndex": "int"
	},
	"Seat":{
			"uid": "int",
			"row": "int",
			"column": "int",
			"loveFlag": "int",
			"status": "int",
			"name": "string",
			"rowIndex": "int",
			"columnIndex": "int"
	},
	"MovieTicketOrder":{
			"showInfoChangedTip": "string",
			"snackDealOrder": "MovieDealOrder",
			"resignDeductionAmount": "string",
			"useMtCashier": "boolean",
			"resignStatus": "int",
			"resignableMsg": "string",
			"resignable": "boolean",
			"resignReferOrder": "MovieTicketOrder",
			"resignedTicket": "boolean",
			"cinema": "Shop",
			"buyTicketDescript": "string",
			"buyTicketTitle": "string",
			"payComponents": "PayComponentmv[]",
			"refundButtonLink": "string",
			"refundButtonText": "string",
			"refundableMsg": "string",
			"refundable": "boolean",
			"addCommentSchema": "string",
			"qRCodeTip": "string",
			"qRCode": "string",
			"errorMsg": "string",
			"ticketMachinePosition": "string",
			"ticketCodeList": "Pair[]",
			"canDelete": "boolean",
			"remainSecond": "int",
			"goNewPayOrder": "boolean",
			"movieSeatDiscount": "MovieSeatDiscount",
			"seats": "Seat[]",
			"uid": "int",
			"movie": "Movie",
			"movieShow": "MovieShow",
			"shopID": "int",
			"shopName": "string",
			"seatNameList": "string[]",
			"ticketStatus": "int",
			"orderStatus": "int",
			"mobileNo": "string",
			"totalAmount": "string",
			"addDate": "time",
			"payProduct": "PayProduct",
			"ticketId": "string",
			"ticketNo": "string",
			"buyTicketStatus": "int",
			"exchangeInfo": "string",
			"expireDate": "time"
	},
	"MovieOnInfo":{
			"favText": "string",
			"preSale": "boolean",
			"favCount": "int",
			"isGoToMovieDetail": "boolean",
			"minPrice": "string",
			"showCountForToday": "int",
			"cinemaCountForToday": "int",
			"movie": "Movie",
			"flag": "int",
			"info": "string",
			"hasMovieShow": "boolean"
	},
	"Cinema":{
			"favShop": "boolean",
			"serviceItems": "Cell[]",
			"messageTip": "string",
			"shopInfoLink": "string",
			"discountDescList": "MovieDiscountDesc[]",
			"shop": "Shop",
			"lastConsumed": "boolean",
			"hasDealGroup": "boolean",
			"hasMovieShow": "boolean",
			"minPrice": "string",
			"minMovieShowPrice": "string",
			"minDealGroupPrice": "string",
			"info": "string",
			"flag": "int"
	},
	"CinemaList":{
			"list": "Cinema[]",
			"regionNavs": "Region[]",
			"sortNavs": "Pair[]",
			"filterNavs": "Pair[]",
			"currentRegion": "Region",
			"currentSort": "Pair",
			"currentFilter": "Pair",
			"filterList": "NaviTag[]"
	},
	"NaviTag":{
			"tagName": "string",
			"enName": "string",
			"options": "Pair[]"
	},
	"MovieSeatDiscount":{
			"priceAfterDiscount": "string",
			"discountExpireTime": "time",
			"maxDiscountCount": "int"
	},
	"TakeAwayShop":{
			"friends": "string",
			"mdcId": "long",
			"mtWmPoiId": "int",
			"deliveryServices": "TAButton[]",
			"isBrand": "boolean",
			"activities": "TAActivity[]",
			"extraServices": "TAButton[]",
			"uid": "int",
			"name": "string",
			"branchName": "string",
			"defaultPic": "string",
			"power": "int",
			"minFeeText": "string",
			"cityID": "int",
			"showText": "string[]",
			"promoTag": "string",
			"status": "int",
			"carrier": "string",
			"bought": "boolean",
			"activityButton": "TAButton[]",
			"distance": "string",
			"category": "string",
			"soldCount": "string",
			"eatenStr": "string"
	},
	"TakeAwayDish":{
			"activity": "TAActivity",
			"leastPurchaseNum": "int",
			"minFeeCalType": "int",
			"salesVolume": "string",
			"littleImageUrl": "string",
			"type": "int",
			"tip": "string",
			"totalNum": "int",
			"limitNum": "int",
			"uid": "int",
			"name": "string",
			"origPrice": "double",
			"curPrice": "double",
			"isSoldOut": "boolean",
			"status": "int",
			"hotNum": "string",
			"bigImageUrl": "string",
			"dishIntroduction": "string"
	},
	"TakeAwayDishSet":{
			"type": "int",
			"name": "string",
			"maxCount": "int",
			"list": "TakeAwayDish[]"
	},
	"TakeAwayDishInfo":{
			"mdcId": "long",
			"mtWmPoiId": "int",
			"categories": "TakeawayFoodCategory[]",
			"salesRankingCategory": "TakeawayFoodCategory",
			"latestOrderDishes": "SimpleOrderDish[]",
			"promoText": "string",
			"cartDishes": "SimpleOrderDish[]",
			"expireMsg": "string",
			"notice": "TakeAwayNotice",
			"recommendDishSet": "TakeAwayDishSet",
			"imagePattern": "int",
			"lng": "double",
			"lat": "double",
			"minAmount": "double",
			"announceText": "string",
			"dishSetList": "TakeAwayDishSet[]",
			"carrierName": "string",
			"status": "int",
			"deliverFee": "double",
			"errorMsg": "string",
			"deliverFeeVariant": "boolean",
			"address": "string",
			"bannerList": "Banner[]",
			"payType": "int",
			"minFeeText": "string",
			"deliveryFee": "string",
			"arrivedInterval": "string",
			"activity": "TAActivity[]",
			"shopPower": "int",
			"reviewStr": "string",
			"reviewCount": "string",
			"isShowReviewed": "boolean"
	},
	"TAActivity":{
			"isShow": "boolean",
			"activityId": "int",
			"activityButton": "TAButton",
			"activityInfo": "string"
	},
	"TAAddressSuggest":{
			"geoResult": "TASuggestResult[]"
	},
	"TASuggestResult":{
			"addressDetail": "string",
			"address": "string",
			"lat": "double",
			"lng": "double"
	},
	"TAValidateAddressResult":{
			"lat": "double",
			"lng": "double",
			"hintMsg": "string",
			"success": "boolean"
	},
	"TAShopResult":{
			"matchToken": "string",
			"extraInfo": "string",
			"title": "string",
			"itemCount": "string"
	},
	"TakeAwayOrder":{
			"productCode": "int",
			"canUseCoupon": "boolean",
			"payType": "int",
			"invoiceMinFee": "string",
			"invoiceSupported": "boolean",
			"status": "int",
			"suitableAddress": "TAUserAddress",
			"onlinePayActivity": "TAActivity",
			"activity": "TAActivity[]",
			"lng": "double",
			"lat": "double",
			"discountList": "TakeAwayOrderItem[]",
			"feeList": "TakeAwayOrderItem[]",
			"originAmount": "double",
			"curAmount": "double",
			"mobilePhone": "string",
			"address": "string",
			"lastPayType": "int",
			"payPromo": "string"
	},
	"TakeAwayOrderItem":{
			"spuAttrIds": "long[]",
			"activity": "TAActivity",
			"dishId": "int",
			"title": "string",
			"price": "double",
			"count": "int",
			"type": "int"
	},
	"OrderResult":{
			"mdcId": "long",
			"mtWmPoiId": "int",
			"shopId": "int",
			"shopName": "string",
			"payOrderResult": "TASubmitPayOrderResult",
			"popUpSwitch": "int",
			"cardContent": "string",
			"popUpContent": "string",
			"popUpTitle": "string",
			"cardUrl": "string",
			"popUpUrl": "string",
			"shareTips": "string",
			"orderId": "string",
			"time": "string",
			"share": "ShareResult[]",
			"orderDetailUrl": "string",
			"needVerify": "int",
			"message": "string"
	},
	"ShareResult":{
			"type": "int",
			"url": "string",
			"title": "string",
			"content": "string",
			"picUrl": "string"
	},
	"TAArea":{
			"uid": "int",
			"name": "string",
			"parentId": "int",
			"lat": "double",
			"lng": "double"
	},
	"TASubmitPayOrderResult":{
			"useMTPay": "boolean",
			"mTPayProduct": "MTPayProduct",
			"showPopUp": "boolean",
			"payOrderId": "int",
			"productType": "int",
			"payProduct": "PayProduct",
			"successUrl": "string",
			"failedUrl": "string"
	},
	"TAPayOrderResult":{
			"shopId": "int",
			"shopName": "string",
			"popUpUrl": "string",
			"cardUrl": "string",
			"popUpTitle": "string",
			"popUpContent": "string",
			"cardContent": "string",
			"popUpSwitch": "int",
			"shareTips": "string",
			"orderId": "string",
			"reachTime": "string",
			"confirmInterval": "string",
			"share": "ShareResult[]",
			"orderDetailUrl": "string",
			"payStatus": "int",
			"message": "string"
	},
	"TAButton":{
			"style": "int",
			"message": "string",
			"type": "int"
	},
	"TAOrderDetail":{
			"mdcId": "long",
			"mtWmPoiId": "int",
			"isShopOnService": "int",
			"loadingTime": "int",
			"mTOrderId": "string",
			"latestStatus": "LatestStatusResp",
			"isMTOrder": "boolean",
			"ableToShareHongBao": "boolean",
			"popUp": "TaPopUp",
			"isToPlayVoice": "boolean",
			"hongBaoPromotion": "string",
			"interval": "int",
			"leftSeconds": "int",
			"shopId": "int",
			"thirdPartyName": "string",
			"applyCancelDesc": "string",
			"thirdPartyPhone": "string",
			"dianpingPhone": "string",
			"orderOperations": "TAButton[]",
			"orderTime": "string",
			"share": "ShareResult",
			"subTips": "string",
			"overtimePaymentDesc": "string",
			"comment": "string",
			"invoice": "string",
			"invoiceType": "int",
			"activity": "TAActivity[]",
			"orderViewId": "string",
			"tips": "string",
			"deliverStatus": "int",
			"shopName": "string",
			"shopPhone": "string[]",
			"dunning": "boolean",
			"dishList": "TakeAwayOrderItem[]",
			"feeList": "TakeAwayOrderItem[]",
			"payStatus": "string",
			"amount": "string",
			"address": "string",
			"contact": "string",
			"announcement": "string",
			"button": "TAButton",
			"discountPrice": "string"
	},
	"MyTakeAway":{
			"mdcId": "long",
			"mtWmPoiId": "int",
			"isShopOnService": "int",
			"shopId": "int",
			"dishes": "string",
			"picUrl": "string",
			"statusType": "int",
			"thirdPartyName": "string",
			"thirdPartyPhone": "string",
			"shopPhone": "string[]",
			"onlinePay": "string",
			"orderViewId": "string",
			"shopName": "string",
			"amount": "string",
			"orderStatusStr": "string",
			"button": "TAButton[]",
			"orderTime": "string",
			"clickDetail": "boolean"
	},
	"TAOrderList":{
			"applyCancelDesc": "string",
			"dianpingPhone": "string",
			"isEnd": "boolean",
			"nextStartIndex": "int",
			"myTakeAway": "MyTakeAway[]"
	},
	"TAShopDetail":{
			"activity": "TAButton",
			"title": "string",
			"tips": "string"
	},
	"TAShopSuggest":{
			"shopResult": "TAShopResult[]"
	},
	"TAArrivedTime":{
			"time": "int",
			"spanTime": "int"
	},
	"ResultAction":{
			"type": "int",
			"name": "string",
			"content": "string"
	},
	"AlertMsg":{
			"actionList": "ResultAction[]"
	},
	"ReceiptRefundInfo":{
			"estimatedRefundTime": "string",
			"curRefundTitle": "string",
			"curRefundStatus": "string",
			"buttonText": "string",
			"buttonUrl": "string",
			"buttonShow": "boolean",
			"customButtonShow": "boolean",
			"huanKaTuiUrl": "string",
			"serialShow": "boolean",
			"receiptId": "int",
			"latestRefund": "string",
			"amount": "double",
			"receiptList": "string",
			"receiptNum": "int",
			"refundToAccount": "string",
			"process": "Pair[]",
			"processItems": "ProcessItem[]"
	},
	"DeliveryList":{
			"list": "Delivery[]",
			"maxCount": "int"
	},
	"BankInfo":{
			"needValidDate": "boolean",
			"bankName": "string",
			"bankId": "string",
			"bankLogo": "string"
	},
	"DiscountList":{
			"isEnd": "boolean",
			"list": "Discount[]",
			"startIndex": "int",
			"nextStartIndex": "int"
	},
	"Remind":{
			"shopGroupID": "int",
			"shopGroupName": "string",
			"cityID": "int",
			"dealGroupID": "int",
			"isRemind": "boolean",
			"addDate": "time"
	},
	"TuanUserProfile":{
			"userID": "int",
			"balance": "string",
			"mobilePhone": "string",
			"mobilePhoneMasked": "string",
			"receiptCount": "int",
			"couponCount": "int",
			"favCount": "int",
			"isOneKeyEnabled": "boolean",
			"isLocked": "boolean",
			"isRebindEnabled": "boolean",
			"unusedReceiptCount": "int",
			"unpayedOrderCount": "int",
			"addressCount": "int",
			"reminderCount": "int",
			"cashback": "string",
			"unratedCount": "int"
	},
	"DealShop":{
			"shopIds": "string",
			"shopCount": "int",
			"isNearest": "boolean",
			"shop": "Shop"
	},
	"Ticket":{
			"title": "string",
			"dealSelectID": "int",
			"count": "int",
			"maxCount": "int",
			"minCount": "int"
	},
	"DealReviewRateInfo":{
			"dealGroupID": "int",
			"rateScore": "string",
			"rateStar": "int",
			"scoreCountDescription": "string",
			"goodReviewPercent": "string"
	},
	"RelativeCard":{
			"cardID": "int",
			"productID": "int",
			"title": "string",
			"endDate": "time",
			"cardNO": "string",
			"balance": "string"
	},
	"PayProduct":{
			"productID": "int",
			"productGroupID": "int",
			"productType": "int",
			"canUseBalance": "boolean",
			"canUseDiscount": "boolean",
			"title": "string",
			"totalAmount": "string",
			"relativeObject": "id"
	},
	"PrePayOrderDTO":{
			"orderID": "int",
			"count": "int",
			"time": "time",
			"userID": "int",
			"mobileNo": "string",
			"cityID": "int",
			"totalPrice": "double",
			"deliveryType": "Pair",
			"discount": "Discount",
			"delivery": "Delivery",
			"invoiceTitle": "string",
			"productGroupID": "int",
			"productID": "int",
			"reductionPrice": "double",
			"reductionDesc": "string",
			"needCountDown": "boolean",
			"remainSecond": "int"
	},
	"PaymentTool":{
			"extendID": "string",
			"tailNumber": "string",
			"eventUrl": "string",
			"visibleMsg": "string",
			"visibleLevel": "int",
			"bankElement": "BankElement",
			"bankName": "string",
			"uid": "string",
			"title": "string",
			"subTitle": "string",
			"highlightTitle": "string",
			"isLastUsed": "boolean",
			"eventDiscountAmount": "double",
			"eventLimitAmount": "double",
			"displayMode": "int",
			"isRedirectBankList": "boolean",
			"needCountDown": "boolean",
			"remainSecond": "int",
			"preposeBankCashierID": "int",
			"iconUrl": "string"
	},
	"Cashier":{
			"promptMsg": "string",
			"userPoint": "UserPoint",
			"showUserPointMode": "int",
			"confirmContent": "string",
			"needConfirm": "boolean",
			"paymentTools": "PaymentTool[]",
			"lastPaymentTool": "PaymentTool",
			"prePayOrderDTO": "PrePayOrderDTO",
			"canUseBalance": "boolean",
			"canUseDiscount": "boolean",
			"userBalance": "double",
			"giftCardBalance": "double",
			"redEnvelopeBalance": "double",
			"userHasDiscount": "boolean",
			"showBalanceMode": "int",
			"showDiscountMode": "int",
			"showQuantityMode": "int",
			"showTotalAmountMode": "int",
			"showPaymentAmountMode": "int",
			"showRedEnvelopeMode": "int",
			"showGiftCardMode": "int",
			"canUseRedEnvelope": "boolean",
			"canUseGiftCard": "boolean",
			"canCombineDiscountPayment": "boolean",
			"combineDiscountPaymentMsg": "string"
	},
	"RecommendDeals":{
			"recommendList": "Deal[]",
			"recommendDescription": "string"
	},
	"CellList":{
			"type": "int",
			"link": "string",
			"subTitle": "string",
			"icon": "string",
			"list": "Cell[]",
			"title": "string"
	},
	"Cell":{
			"nextRedirectUrl": "string",
			"tagUrl": "string",
			"uid": "int",
			"cellID": "int",
			"cellType": "int",
			"title": "string",
			"subTitle": "string",
			"imageUrl": "string",
			"extra": "string",
			"cellData": "string"
	},
	"PrepaidCard":{
			"prepaidCardID": "int",
			"title": "string",
			"subTitle": "string",
			"productName": "string",
			"logo": "string",
			"bgImage": "string",
			"fontColor": "string",
			"userName": "string",
			"cardNo": "string",
			"cardType": "int",
			"qRCode": "string",
			"balance": "string",
			"validateDate": "time",
			"status": "int",
			"accountID": "int"
	},
	"PrepaidCardTrade":{
			"tradeType": "int",
			"tradeTime": "time",
			"cash": "string"
	},
	"PrepaidCardGiftTrade":{
			"tradeID": "int",
			"tradeType": "int",
			"tradeTime": "time",
			"cash": "string",
			"tradeDetail": "string",
			"statusMsg": "string",
			"statusCode": "int",
			"cancelable": "boolean",
			"fontColor": "string"
	},
	"PrepaidCardTradeList":{
			"list": "PrepaidCardTrade[]"
	},
	"PrepaidCardGiftTradeList":{
			"list": "PrepaidCardGiftTrade[]"
	},
	"BarcodeInfo":{
			"barcode": "string",
			"authKey": "string"
	},
	"CategoryList":{
			"personalizeNum": "int",
			"list": "Category[]"
	},
	"ShopAggDealGroup":{
			"shop": "Shop",
			"deals": "Deal[]"
	},
	"Banner":{
			"feedback": "string",
			"uid": "int",
			"image": "string",
			"url": "string"
	},
	"CardCategory":{
			"paymentChannel": "int",
			"cardType": "int",
			"cardName": "string",
			"cardTip": "string",
			"rank": "int",
			"bankList": "BankElement[]"
	},
	"BankElement":{
			"tailNumber": "string",
			"eventUrl": "string",
			"discountAmount": "string",
			"visibleLevel": "int",
			"visibleMsg": "string",
			"bankCode": "string",
			"paymentID": "string",
			"bankName": "string",
			"tip": "string",
			"icon": "string",
			"iconUrl": "string",
			"cardType": "int",
			"rankLetter": "string",
			"rank": "int"
	},
	"Event":{
			"memo": "string",
			"discount": "double",
			"uid": "string",
			"tag": "string",
			"shortTitle": "string",
			"type": "int",
			"color": "string",
			"desc": "string",
			"needLogin": "boolean"
	},
	"Reservation":{
			"uid": "int",
			"status": "int",
			"statusMemo": "string",
			"date": "time",
			"name": "string",
			"idCard": "string",
			"phoneNumber": "string",
			"touristNum": "int",
			"receiptIds": "int[]",
			"orderId": "int",
			"isRealName": "boolean",
			"needIdCard": "boolean",
			"beginDate": "time",
			"endDate": "time",
			"disableDates": "time[]",
			"title": "string",
			"receiptNum": "int",
			"canSendSms": "boolean",
			"extra": "string"
	},
	"RecommendResult":{
			"title": "string",
			"tabName": "string",
			"imageUrl": "string",
			"dealList": "DealList",
			"moreUrl": "string"
	},
	"ReviewInfo":{
			"useDate": "string",
			"bonusText": "string",
			"title": "string",
			"subTitle": "string",
			"imgUrl": "string",
			"orderId": "int",
			"dealId": "int",
			"shopId": "int",
			"rateId": "int",
			"date": "time"
	},
	"ReviewInfoList":{
			"showLimit": "int",
			"list": "ReviewInfo[]"
	},
	"TuanReview":{
			"score": "int",
			"pictureList": "Picture[]",
			"userName": "string",
			"postDate": "time",
			"starNum": "int",
			"memo": "string",
			"content": "string",
			"shopName": "string",
			"rateId": "int"
	},
	"TuanReviewList":{
			"reviewRatio": "string",
			"list": "TuanReview[]",
			"totalReview": "int",
			"totalRecommend": "int",
			"items": "Pair[]"
	},
	"ProcessItem":{
			"isWarning": "boolean",
			"title": "string",
			"content": "string",
			"date": "time",
			"isFinished": "boolean"
	},
	"IndexProm":{
			"label": "string",
			"promTitle": "string",
			"endTime": "string",
			"title": "string",
			"startTime": "string",
			"url": "string",
			"indexPromItemList": "IndexPromItem[]"
	},
	"IndexPromItem":{
			"isSaleOut": "boolean",
			"originPrice": "string",
			"promPrice": "string",
			"itemTitle": "string",
			"pic": "string",
			"url": "string"
	},
	"NotificationSwitch":{
			"open": "boolean",
			"desc": "string",
			"title": "string",
			"id": "int"
	},
	"WeddingHotelFuzzyRecommendInfo":{
			"categoryIds": "int[]",
			"categorys": "string[]",
			"regionList": "Region[]",
			"orderCount": "int",
			"prices": "string[]",
			"tables": "string[]",
			"regions": "string[]",
			"promoInfo": "string"
	},
	"BeautyShopPhoto":{
			"shopID": "int",
			"uploadTime": "string",
			"url": "string",
			"thumblUrl": "string",
			"name": "string",
			"uid": "int"
	},
	"ReviewDetail":{
			"favorUser": "PlazaUser[]",
			"reviewShop": "Shop",
			"userReview": "Review"
	},
	"BeautyHairReviewTag":{
			"name": "string"
	},
	"FindAdsItem":{
			"url": "string",
			"picUrl": "string",
			"desc": "string",
			"title": "string"
	},
	"FindAds":{
			"findAdsItemList": "FindAdsItem[]",
			"title": "string"
	},
	"Draft":{
			"time": "double",
			"key": "string",
			"data": "DraftData",
			"type": "int",
			"shopID": "int",
			"shopName": "string"
	},
	"DraftData":{
			"photoItems": "DraftPhotoItem[]",
			"reviewForm": "ReviewForm",
			"error": "string",
			"content": "string",
			"rate": "int",
			"longitude": "double",
			"latitude": "double"
	},
	"ShopExtra":{
			"rankList": "ClickEntity",
			"certifiedIconUrl": "string",
			"certifiedShopInfo": "string",
			"searchReasonSource": "string",
			"searchReasonContent": "string",
			"certificationsShow": "boolean",
			"adReason": "string",
			"mallPreferential": "string",
			"mallPic": "string",
			"certifications": "TileEntity[]",
			"shopInMall": "string",
			"mallBizType": "int",
			"promoInfoInMall": "string",
			"shopInfoInMall": "string",
			"brandStory": "BrandStory",
			"feedback": "string",
			"adText2": "string",
			"adText1": "string",
			"superMarket": "string",
			"cinema": "string",
			"topMall": "boolean",
			"adType": "int",
			"shopMallId": "int",
			"shopMallUrl": "string",
			"shopMallName": "string",
			"discountMsg": "string",
			"adalgoversion": "string",
			"adrequestId": "string",
			"adslotId": "string",
			"adproductId": "string",
			"adlaunchId": "string",
			"beautyPrice": "string",
			"searchReason": "string",
			"pathtype": "int",
			"pathtime": "string",
			"path": "string",
			"time": "string"
	},
	"FindBbsTopic":{
			"thumbPicUrl": "string",
			"groupName": "string",
			"reviewCount": "int",
			"picUrl": "string",
			"url": "string",
			"up": "string",
			"subTitle": "string",
			"title": "string"
	},
	"FindBbs":{
			"url": "string",
			"findBbsTopicList": "FindBbsTopic[]",
			"title": "string"
	},
	"FindHotItem":{
			"isNew": "boolean",
			"itemExt": "FindHotItemExt",
			"tag": "string",
			"url": "string",
			"picUrl": "string",
			"subTitle": "string",
			"title": "string"
	},
	"FindHot":{
			"findHotItemList": "FindHotItem[]"
	},
	"WeddingHotelPromo":{
			"detail": "string[]",
			"desc": "string",
			"title": "string"
	},
	"CpmAd":{
			"clickURL": "string",
			"structuredInfo": "string",
			"tag": "string",
			"originalPrice": "string",
			"price": "string",
			"content": "string",
			"feedback": "string",
			"activityUrl": "string",
			"activityDes": "string",
			"activityTitle": "string",
			"regionName": "string",
			"brandName": "string",
			"shopType": "int",
			"distanceStr": "string",
			"secondCategory": "string",
			"displayID": "int",
			"branchName": "string",
			"shopName": "string",
			"shopID": "int",
			"imgUrl": "string",
			"productID": "int",
			"star": "int",
			"ipay": "boolean",
			"itakeout": "boolean",
			"ibook": "boolean",
			"igroup": "boolean",
			"icard": "boolean",
			"ipromo": "boolean",
			"launchID": "int"
	},
	"AppCpmBean":{
			"tag": "string",
			"cpmAdList": "CpmAd[]"
	},
	"CreditData":{
			"creditID": "string",
			"title": "string"
	},
	"Festival":{
			"date": "string",
			"name": "string"
	},
	"RestDay":{
			"date": "string",
			"flag": "int"
	},
	"FestivalList":{
			"restDays": "RestDay[]",
			"festivals": "Festival[]"
	},
	"WeiXinCardInfo":{
			"rid": "int",
			"cardExt": "string",
			"cardId": "string"
	},
	"ReceiptGroup":{
			"aggregationType": "int",
			"dealGroupId": "int",
			"expireDate": "time",
			"orderId": "int",
			"receiptList": "Coupon[]"
	},
	"WeddingHotelPromoSummary":{
			"summary": "string",
			"title": "string"
	},
	"DealDiscountItem":{
			"discountDesc": "string",
			"dealId": "int"
	},
	"BeautyHairBookingProduct":{
			"marketPrice": "double",
			"url": "string",
			"quota": "int",
			"currentPrice": "double",
			"listPrice": "double",
			"name": "string",
			"uid": "int"
	},
	"ReceiptGroupList":{
			"hasRefund": "boolean",
			"list": "ReceiptGroup[]"
	},
	"TPHotelProduct":{
			"orderPolicy": "string",
			"endDate": "string",
			"statusText": "string",
			"status": "int",
			"productUrl": "string",
			"tag": "int",
			"dealChannel": "int",
			"promoList": "ProductPromo[]",
			"currentJoin": "int",
			"imageUrl": "string",
			"marketPrice": "string",
			"title": "string",
			"price": "double",
			"uid": "int",
			"contentTitle": "string"
	},
	"TPHotelProductList":{
			"hotelProducts": "TPHotelProduct[]",
			"otherProducts": "TPHotelProduct[]"
	},
	"ProductPromo":{
			"type": "int",
			"amount": "string",
			"title": "string"
	},
	"DraftPhotoItem":{
			"photoFileId": "string",
			"photoIsUpload": "boolean",
			"photoCategory": "ShopPhotoCategory",
			"photoPrice": "string",
			"photoName": "string",
			"photoMetaLng": "double",
			"photoMetaLat": "double",
			"photoPath": "string",
			"photoId": "int"
	},
	"DiscountEvent":{
			"mutexDiscountTools": "int[]",
			"tip": "string",
			"discountAmount": "double",
			"isEnable": "boolean",
			"isShowTitle": "boolean",
			"type": "int",
			"limitCount": "int",
			"limitAmount": "double",
			"desc": "string",
			"title": "string",
			"uid": "int"
	},
	"WalletItem":{
			"icon": "string",
			"subTitle": "string",
			"title": "string",
			"num": "string",
			"url": "string",
			"pair": "Pair"
	},
	"NearbyFeedImage":{
			"threeTwoUrl": "string",
			"bigUrl": "string",
			"middleUrl": "string",
			"smallUrl": "string"
	},
	"NearbyFeed":{
			"likeUsers": "FeedLikeUser[]",
			"reviewId": "int",
			"reviewCount": "int",
			"cityId": "int",
			"cityName": "string",
			"showType": "int",
			"friendName": "string",
			"friendType": "int",
			"isFriend": "boolean",
			"scorePower": "int",
			"feedContent": "string",
			"shopPower": "int",
			"userPower": "int",
			"regionName": "string",
			"regionId": "int",
			"categoryName": "string",
			"categoryId": "int",
			"feedType": "int",
			"shopLng": "double",
			"shopLat": "double",
			"shopName": "string",
			"shopID": "int",
			"isLike": "boolean",
			"likeCount": "int",
			"images": "NearbyFeedImage[]",
			"addTime": "time",
			"avatar": "string",
			"nick": "string",
			"userID": "int",
			"uid": "int"
	},
	"NearbyFeedList":{
			"NewTotalFeeds": "int",
			"topFeeds": "NearbyFeed[]",
			"bindList": "FriendBindStatus[]",
			"interval": "int",
			"totalFeeds": "int",
			"list": "NearbyFeed[]"
	},
	"TALocation":{
			"address": "string",
			"lng": "double",
			"lat": "double"
	},
	"BeautyShop":{
			"addTechnicianUrl": "string",
			"shopBanners": "ShopBanner[]",
			"technicianTitle": "string",
			"technicianListUrl": "string",
			"technicians": "BeautyTechnician[]",
			"hasTechnician": "boolean",
			"technicianCount": "int",
			"headPhotoUrl": "string",
			"productListUrl": "string",
			"productCount": "int",
			"products": "BeautyProduct[]",
			"photos": "BeautyShopPhoto[]",
			"bookingUrl": "string",
			"bookingTips": "string",
			"bookable": "boolean",
			"shopId": "int"
	},
	"PayStrategys":{
			"maxPayAmount": "int",
			"minPayAmount": "int",
			"shopName": "string",
			"jsFunction": "string"
	},
	"CashPayment":{
			"payContent": "string",
			"msg": "string",
			"status": "int",
			"orderId": "int"
	},
	"BeautyProduct":{
			"pageUrl": "string",
			"discountPrice": "double",
			"listPrice": "double",
			"photoUrl": "string",
			"name": "string",
			"id": "int"
	},
	"BannerInfo":{
			"bannerItemList": "Banner[]"
	},
	"HomeNavigator":{
			"displayName": "string",
			"imgUrl": "string",
			"categoryName": "string",
			"categoryID": "int"
	},
	"HomeStyle":{
			"coverImg": "string",
			"count": "int",
			"styleName": "string"
	},
	"GuessLikeItem":{
			"adCpm": "HomeBaseUnit",
			"avePrice": "string",
			"showHui": "boolean",
			"showWai": "boolean",
			"recomDesc": "string",
			"tagType": "int",
			"needOrder": "boolean",
			"extContent": "string",
			"hasExtension": "boolean",
			"showPiao": "boolean",
			"showCu": "boolean",
			"showTuan": "boolean",
			"detailInfoSchema": "string",
			"showDing": "boolean",
			"shopPower": "int",
			"lat": "double",
			"lng": "double",
			"oriPrice": "string",
			"id": "int",
			"price": "string",
			"tags": "string[]",
			"picUrl": "string",
			"subTitle": "string",
			"mainTitle": "string"
	},
	"GuessLikeList":{
			"specialTopic": "ClickEntity[]",
			"isEnd": "boolean",
			"nextStartIndex": "int",
			"sessionId": "string",
			"queryID": "string",
			"itemList": "GuessLikeItem[]",
			"moreUrlSchema": "string"
	},
	"HomeMaterial":{
			"searchKeyWord": "string",
			"flag": "int",
			"imgUrl": "string",
			"materialName": "string",
			"categoryID": "int"
	},
	"HotelFeature":{
			"priority": "int",
			"good": "boolean",
			"comment": "string"
	},
	"HomeBanner":{
			"url": "string",
			"image": "string"
	},
	"HomeProductDetailExtra":{
			"productName": "string",
			"shopID": "int",
			"otherProductsTotalCount": "int",
			"otherProducts": "WeddingProduct[]",
			"tagList": "Pair[]",
			"categoryID": "int",
			"styleName": "string",
			"shop": "Shop"
	},
	"PayResult":{
			"prepayAmount": "string",
			"shareTip": "ShareTip",
			"cashCode": "string",
			"userPayAmount": "string",
			"shopActualAmount": "string",
			"consumeAmount": "string",
			"savedAmount": "string",
			"activityItems": "BookingUrlItemVO[]",
			"payDate": "time",
			"totalAmount": "string",
			"payAmount": "string",
			"shopName": "string",
			"status": "int"
	},
	"HomeProduct":{
			"priceInfo": "string",
			"productID": "int",
			"apartment": "string",
			"imgCount": "int",
			"area": "string",
			"coverImg": "string"
	},
	"MovieDiscountDesc":{
			"uid": "int",
			"hint": "string",
			"label": "string"
	},
	"MovieDiscountIndex":{
			"movieDiscountIDList": "int[]",
			"time": "time",
			"movieDiscountList": "MovieDiscountDesc[]"
	},
	"MovieSeatPrice":{
			"totalAmount": "string",
			"seatNum": "int"
	},
	"MovieDiscountPayOption":{
			"commonDiscountYellowMark": "string",
			"commonDiscountEntryMark": "string",
			"discountUnavailableReason": "string",
			"discountUnavailable": "boolean",
			"reductionAmountPairs": "MovieReductionAmountPair[]",
			"selectedPayHint": "string",
			"discountLabel": "string",
			"defaultSelected": "boolean",
			"selectedAmount": "string",
			"discountPayHint": "string",
			"discountID": "int"
	},
	"MovieTrailer":{
			"imageUrl": "string",
			"desc": "string",
			"sourceUrl": "string",
			"trailerId": "int"
	},
	"MovieScreenPhoto":{
			"photo180x180": "string",
			"photo700x700": "string",
			"photo80x70": "string",
			"dpUrl": "string",
			"desc": "string",
			"sourceUrl": "string",
			"photoId": "int"
	},
	"SearchKeyword":{
			"keyword": "string",
			"searchValue": "string"
	},
	"HotSearchParams":{
			"searchKeywordList": "SearchKeyword[]"
	},
	"HotelPromoInfo":{
			"promoName": "string",
			"promoIntro": "string",
			"url": "string"
	},
	"ShopEvent":{
			"eventTag": "string",
			"shopId": "int"
	},
	"ShopEventList":{
			"eventList": "ShopEvent[]"
	},
	"WeddingShopBriefInfo":{
			"babyProject": "Pair[]",
			"babyTitle": "string",
			"serviceFlowLink": "string",
			"categoryName": "string",
			"uiFlag": "int",
			"babyEnvPicHeight": "int",
			"babyEnvPicWidth": "int",
			"babyEnvPics": "string[]",
			"detailLink": "string",
			"available": "int",
			"characteristics": "string[]",
			"businessHours": "string"
	},
	"MovieTip":{
			"tip": "string",
			"time": "time"
	},
	"TakeAwayBrandShopList":{
			"list": "TakeAwayShop[]",
			"lng": "double",
			"lat": "double"
	},
	"ScoreItem":{
			"scoreName": "string",
			"score": "double",
			"oTAShortReviewList": "OTAShortReview[]"
	},
	"OTAScore":{
			"name": "string",
			"score": "double"
	},
	"HotelReview":{
			"isDianpingURL": "boolean",
			"bookingReviewCount": "int",
			"avgScore": "double",
			"otaID": "int",
			"showReviewFilter": "boolean",
			"isOverseaCity": "boolean",
			"oTAScoreList": "OTAScore[]",
			"scoreList": "ScoreItem[]",
			"globalReviewCount": "int",
			"oTATagName": "string",
			"oTAReviewUrl": "string"
	},
	"OTAShortReview":{
			"reviewBody": "string",
			"addDate": "string"
	},
	"HotRecomItem":{
			"detailInfoSchema": "string",
			"picUrl": "string",
			"subTitle": "string",
			"mainTitle": "string",
			"id": "int"
	},
	"SettledShop":{
			"shopTag": "string",
			"smallShopPic": "string",
			"shopUrl": "string",
			"shopPic": "string",
			"shopCount": "int",
			"shopName": "string"
	},
	"PreferentialShop":{
			"discountForDeal": "string",
			"categoryName": "string",
			"shopName": "string",
			"shopUrl": "string",
			"discount": "string",
			"shopPic": "string"
	},
	"PreferentialShopList":{
			"shops": "PreferentialShop[]",
			"title": "string",
			"url": "string",
			"count": "int"
	},
	"Picture":{
			"title": "string",
			"url": "string",
			"thumb": "string",
			"uid": "int"
	},
	"AccommodationGuideDetail":{
			"regionID": "string",
			"regionNO": "string",
			"regionName": "string",
			"regionEnName": "string",
			"hotRate": "string",
			"landMarks": "LinkDo[]",
			"advantage": "string[]",
			"disadvantage": "string[]",
			"url": "Link"
	},
	"MoreDealsList":{
			"bestShopName": "string",
			"sameShopDeals": "DealList",
			"otherShopDeals": "DealList"
	},
	"ShopMallDeal":{
			"brandLogo": "string",
			"tags": "string[]",
			"productName": "string",
			"needReservation": "boolean",
			"dealUrl": "string",
			"dealID": "int",
			"floor": "string",
			"originalPrice": "string",
			"price": "string",
			"photo": "string",
			"contentTitle": "string",
			"title": "string"
	},
	"ShopMallDealList":{
			"tag": "string",
			"deals": "ShopMallDeal[]",
			"url": "string",
			"count": "int",
			"title": "string"
	},
	"ShopMallBanner":{
			"type": "string",
			"url": "string",
			"image": "string",
			"uid": "int"
	},
	"FindHotItemExt":{
			"userPic": "string"
	},
	"TAReview":{
			"likedDishList": "TakeAwayOrderItem[]",
			"userName": "string",
			"reviewBody": "string",
			"shopPower": "int",
			"time": "string",
			"speed": "string"
	},
	"TakeAwayReviewList":{
			"dpReviewCount": "string",
			"showEntrance": "boolean",
			"hasLiked": "boolean",
			"reviewCate": "TAButton[]",
			"list": "TAReview[]",
			"nextStartPage": "int"
	},
	"TakeAwayShopInfo":{
			"taLicencePics": "TaLicencePic[]",
			"legalInfo": "string",
			"legalImgs": "string[]",
			"dpReviewCount": "int",
			"picCount": "int",
			"defaultPic": "string",
			"extraServices": "TAActivity[]",
			"deliveryFree": "int",
			"activities": "TAActivity[]",
			"lng": "double",
			"lat": "double",
			"orderCount": "string",
			"serveTimes": "string[]",
			"thirdPartyName": "string",
			"address": "string",
			"announceText": "string",
			"phones": "string[]",
			"taste": "string",
			"packageScore": "string",
			"shopPower": "int",
			"shopName": "string",
			"speed": "string",
			"minFeeText": "string",
			"deliveryFee": "string"
	},
	"SubmitOrderResult":{
			"unifiedOrderId": "string",
			"errorMsg": "string",
			"errorCode": "string",
			"orderId": "int",
			"status": "int"
	},
	"AddContacts":{
			"code": "int",
			"count": "int"
	},
	"HomeShopBrief":{
			"url": "string",
			"briefInfoPairs": "Pair[]",
			"shopCharacteristics": "string[]",
			"shopScale": "string"
	},
	"RuleDo":{
			"type": "int",
			"ruleDetailDos": "RuleDetailDo[]",
			"title": "string"
	},
	"NewUserTicketSendResultVO":{
			"thirdMessage": "string",
			"subMessage": "string",
			"underSectionMessage": "string",
			"deduce": "int",
			"message": "string"
	},
	"UgcRecommend":{
			"defaultPic": "string",
			"referToken": "string",
			"bonusDesc": "string",
			"actionDesc": "string",
			"shopName": "string",
			"shopID": "int"
	},
	"IndexHotItem":{
			"tag": "int",
			"title": "string",
			"url": "string",
			"image": "string",
			"subTitle": "string"
	},
	"IndexHot":{
			"indexHotList": "IndexHotItem[]"
	},
	"RuleDetailDo":{
			"title": "string",
			"ruleDescs": "string[]",
			"type": "int"
	},
	"TPHotelBestShop":{
			"shopType": "int",
			"styleType": "int",
			"display": "boolean",
			"isNearest": "boolean",
			"shop": "Shop",
			"url": "string"
	},
	"Login":{
			"NewToken": "string",
			"token": "string"
	},
	"FriendBindStatus":{
			"typeInt": "int",
			"isBind": "boolean",
			"type": "string"
	},
	"Signup":{
			"NewToken": "string",
			"token": "string"
	},
	"RecommendCinemaList":{
			"list": "Cinema[]"
	},
	"MovieOnInfoList":{
			"link": "string",
			"icon": "string",
			"subTitle": "string",
			"title": "string",
			"list": "MovieOnInfo[]"
	},
	"MovieComment":{
			"friendType": "int",
			"movieId": "int",
			"imageKeys": "string[]",
			"replyContentMinLength": "int",
			"replyContentMaxLength": "int",
			"likeUserListPageUrl": "string",
			"likeItUsers": "MovieUser[]",
			"mineComment": "boolean",
			"containSpoilers": "boolean",
			"thumbImages": "string[]",
			"images": "string[]",
			"likedByCurrentUser": "boolean",
			"commentTag": "string",
			"movieUser": "MovieUser",
			"title": "string",
			"replyNum": "int",
			"likeItNum": "int",
			"score": "int",
			"time": "string",
			"comment": "string",
			"commentLink": "string",
			"movieLink": "string",
			"movieName": "string",
			"uid": "int"
	},
	"MovieCommentList":{
			"moreUrl": "string",
			"list": "MovieComment[]"
	},
	"ShoperResult":{
			"moreUrl": "string",
			"moreTitle": "string",
			"addinTitle": "string",
			"tag": "string",
			"picUrl": "string",
			"addin": "string",
			"phoneTitle": "string",
			"phoneUrl": "string",
			"subTitle": "string",
			"title": "string",
			"url": "string"
	},
	"StarGossipItem":{
			"url": "string",
			"starPic": "string",
			"subTitle": "string",
			"currentDate": "long",
			"title": "string"
	},
	"StarGossip":{
			"itemList": "StarGossipItem[]"
	},
	"AppElementAlertItem":{
			"alertId": "int",
			"version": "int",
			"cacheType": "int",
			"viewStyle": "string",
			"disappearType": "int",
			"elementId": "string",
			"moduleName": "string",
			"pageName": "string"
	},
	"AppElementAlert":{
			"itemList": "AppElementAlertItem[]"
	},
	"DayDeal":{
			"date": "time",
			"price": "int",
			"remain": "int",
			"dealId": "int"
	},
	"DealCalendar":{
			"dayDealList": "DayDeal[]",
			"orderUrl": "Link",
			"orderSwitcher": "int"
	},
	"UserPoint":{
			"userPointExchangeRules": "UserPointExchangeRule[]",
			"totalUserPointValue": "int",
			"canUseUserPoint": "boolean"
	},
	"TAUserAddress":{
			"name": "string",
			"gender": "int",
			"outOfRange": "boolean",
			"type": "int",
			"needUpdate": "boolean",
			"poi": "string",
			"lng": "double",
			"lat": "double",
			"addressKey": "int",
			"phone": "string",
			"address": "string"
	},
	"TAUserAddressResult":{
			"isSuccess": "int",
			"maxNum": "int",
			"myUserAddress": "TAUserAddress[]"
	},
	"WeddingProductSearchResult":{
			"bookingCountText": "string",
			"bookingCount": "int",
			"flags": "int",
			"bookable": "int",
			"memberCardID": "int",
			"promoID": "int",
			"dealGroupIdList": "int[]",
			"adType": "int",
			"originPrice": "int",
			"price": "int",
			"showPriceType": "int",
			"reviewCount": "int",
			"shopPower": "int",
			"shopType": "int",
			"defaultPic": "string",
			"productName": "string",
			"branchName": "string",
			"shopName": "string",
			"productID": "int",
			"shopID": "int"
	},
	"WeddingTagValueNav":{
			"type": "int",
			"name": "string"
	},
	"WeddingTagGroupNav":{
			"tagList": "WeddingTagValueNav[]",
			"uid": "int",
			"name": "string"
	},
	"WeddingCategoryNav":{
			"productCategoryID": "int",
			"type": "int",
			"subCategories": "WeddingCategoryNav[]",
			"deep": "int",
			"name": "string",
			"uid": "int"
	},
	"WeddingProductSearchNav":{
			"filterTagGroupList": "Pair[]",
			"photoLocList": "Pair[]",
			"tagGroupList": "WeddingTagGroupNav[]",
			"sortList": "Pair[]",
			"regionList": "Pair[]",
			"categoryList": "WeddingCategoryNav[]"
	},
	"WeddingProductSearchResultList":{
			"page": "int",
			"coverStyleType": "int",
			"tc": "int",
			"aid": "string",
			"searchNav": "WeddingProductSearchNav",
			"list": "WeddingProductSearchResult[]"
	},
	"UserPointExchangeRule":{
			"ruleID": "int",
			"memo": "string",
			"userPointBalance": "double",
			"userPointValue": "int"
	},
	"MovieNews":{
			"link": "string",
			"brief": "string",
			"title": "string",
			"imageUrl": "string",
			"uid": "int"
	},
	"PayStrategysDo":{
			"thirdPartyOrderType": "int",
			"thirdPartyOrderId": "string",
			"orderBizType": "int",
			"activityJSShowTypeList": "int[]",
			"payHint": "string",
			"noDiscountInputUrl": "string",
			"enableNoDiscountInput": "string",
			"activityJSFunction": "string",
			"discountTips": "string",
			"orderID": "int",
			"minAmount": "string",
			"discountDesc": "string",
			"rules": "RuleDo[]",
			"jSFunction": "string"
	},
	"RoomDescInfo":{
			"textDesc": "string",
			"maxPeople": "int",
			"minPeople": "int"
	},
	"WeatherInfo":{
			"picUrl": "string",
			"suggestion": "string",
			"weatherDesc": "string",
			"type": "int"
	},
	"TASuitableAddressResult":{
			"allOutOfRange": "int",
			"suitableAddress": "TAUserAddress",
			"status": "int"
	},
	"WeddingPhotoLocList":{
			"list": "Pair[]",
			"name": "string"
	},
	"WeddingPhotoLocListResult":{
			"list": "WeddingPhotoLocList[]"
	},
	"HomeMarketBrief":{
			"logo": "string",
			"showBrief": "boolean",
			"shopCharacteristics": "string[]",
			"businessRange": "string[]"
	},
	"KTVSelectItem":{
			"childItems": "KTVSelectItem[]",
			"displayName": "string",
			"itemType": "string",
			"itemId": "int"
	},
	"KTVRoomData":{
			"comment": "string",
			"roomCapacity": "string",
			"roomReceipt": "string",
			"roomName": "string",
			"dealContent": "string",
			"roomId": "int",
			"timeId": "int",
			"dateId": "int"
	},
	"KTVTable":{
			"dealGroupId": "int",
			"remark": "string",
			"showable": "boolean",
			"selectedIndex": "int",
			"drinkDeals": "DrinkTable[]",
			"structedDetails": "Pair[]",
			"ktvRoomData": "KTVRoomData[]",
			"ktvTimes": "KTVSelectItem[]",
			"ktvDates": "KTVSelectItem[]",
			"ktvRooms": "KTVSelectItem[]",
			"settleType": "int"
	},
	"HotelBookingDefaultInfo":{
			"tipsCannotCancel": "string",
			"dealTitle": "string",
			"tipsCanCancel": "string",
			"maxCoupon": "int",
			"minCoupon": "int",
			"minRoom": "int",
			"cancelDaysLimit": "int",
			"cancelTime": "time",
			"maxRoom": "int",
			"defaultCheckout": "time",
			"defaultCheckin": "time"
	},
	"HotelDealBookingStatus":{
			"bookingDefaultInfo": "HotelBookingDefaultInfo",
			"statusTitle": "string",
			"status": "int",
			"dealTitle": "string",
			"dealId": "int"
	},
	"DayBookingStatus":{
			"status": "int",
			"date": "string"
	},
	"HotelBookingCalendar":{
			"tips": "string",
			"bookingStatusList": "DayBookingStatus[]"
	},
	"VerifyCode":{
			"piclen": "int",
			"msg": "string",
			"ticket": "string",
			"image": "string"
	},
	"DiscoverItem":{
			"uid": "string",
			"subTitle": "string",
			"url": "string",
			"picUrl": "string",
			"title": "string"
	},
	"DiscoverItemList":{
			"items": "DiscoverItem[]"
	},
	"DiscoverModule":{
			"itemLists": "DiscoverItemList[]",
			"uid": "string"
	},
	"HomeMarketBrand":{
			"mainCategoryID": "int",
			"logo": "string"
	},
	"HomeMarketEvent":{
			"eventID": "int",
			"visit": "int",
			"eventTime": "string",
			"eventInfo": "string",
			"eventName": "string",
			"eventLogo": "string"
	},
	"HotelDealGroupBookingInfo":{
			"statusTitle": "string",
			"status": "int",
			"statusList": "HotelDealBookingStatus[]",
			"date": "time"
	},
	"HotelDealBookingInfo":{
			"bookingDetailUrl": "string",
			"statusTitle": "string",
			"status": "int",
			"checkoutDate": "time",
			"checkinDate": "time",
			"roomCount": "int",
			"dealTitle": "string",
			"dealId": "int"
	},
	"BookingInfoResult":{
			"bookingButtonDisplay": "boolean",
			"bookingInfoList": "HotelDealBookingInfo[]"
	},
	"HotelPrice":{
			"isHotelFull": "boolean",
			"marketPrice": "int",
			"price": "int",
			"shopId": "int"
	},
	"HotelPriceList":{
			"priceList": "HotelPrice[]"
	},
	"HotSearchVO":{
			"hotItems": "BookingUrlItemVO[]"
	},
	"HomeMarketCategory":{
			"categoryName": "string",
			"categoryID": "int"
	},
	"HomeMarketNavigator":{
			"floorNum": "string",
			"secondCategoryList": "HomeMarketCategory[]",
			"mainCategory": "HomeMarketCategory"
	},
	"RecommendedShopList":{
			"shopList": "BookingShop[]",
			"subTitle": "string",
			"title": "string"
	},
	"ProductPromoDO":{
			"type": "int",
			"amount": "string",
			"title": "string"
	},
	"TPHotelProductListDO":{
			"otherShowNum": "int",
			"hotelShowNum": "int",
			"otherProducts": "TPHotelProduct[]",
			"hotelProducts": "TPHotelProduct[]"
	},
	"PayPromosDo":{
			"uniCashierUrl": "string",
			"businessType": "int",
			"showStatus": "int",
			"title": "string"
	},
	"AppConfig":{
			"isForceShowUpdateDialog": "boolean",
			"updateDialogShowTime": "int",
			"appPromotionConfig": "string",
			"enableQCloudDownload": "string",
			"titansWhiteBoard": "string",
			"useOldNavigationAnimation": "boolean",
			"versionTitle": "string",
			"versionImg": "string",
			"versionSuggestion": "string",
			"shouldUseJudasOnly": "string",
			"countMergeConfig": "string",
			"tTCommonFileList": "string",
			"appSkinConfig": "string",
			"bluetoothScanDuration": "string",
			"enableQCloud": "string",
			"enableHackPhone": "boolean",
			"orderListTabs": "string",
			"wnsGreenList": "string",
			"inviteFriendUrl": "string",
			"myMovieSchema": "string",
			"wnsWhiteList": "string",
			"wnsBlackList": "string",
			"hotelCateIds": "string",
			"enableKTVNewStyle": "boolean",
			"spDefaultKey": "string",
			"splashUrlTemplate": "string",
			"movieBookingConfig": "MovieBooking",
			"domainMap": "string",
			"delayForLocation": "int",
			"tuanHome": "string",
			"checkinServerVerify": "boolean",
			"timeSyncThreshold": "int",
			"configLocateRange2": "int",
			"configLocateRange1": "int",
			"verifyDistance": "int",
			"passbookYYdisable": "boolean",
			"enableCardQRcode": "boolean",
			"disableweblogin": "boolean",
			"disableFeed": "int",
			"enablevoice": "boolean",
			"citiesForBabyProduct": "string",
			"customServiceEnd": "string",
			"customServiceStart": "string",
			"enableGrandNoviceGift": "boolean",
			"disableMcdonalds": "boolean",
			"babyProductSearchCategoryList": "string",
			"babyProductSearchCityList": "string",
			"weddingProductSearchCategoryList": "string",
			"weddingProductSearchCityList": "string",
			"iamShoperSwitch": "boolean",
			"scaleImageSizeHeight": "int",
			"scaleImageSizeWidth": "int",
			"enableUploadLog": "boolean",
			"enableSplashSync": "boolean",
			"enableSplashCache": "boolean",
			"cxk": "string",
			"switchTuanDomain": "string",
			"homeTuanDelay": "int",
			"urlMappingRevision": "int",
			"enableMOPay": "boolean",
			"updatePromptTitle": "string",
			"ratePromptTitle": "string",
			"appVersion": "string",
			"cssLink": "string",
			"cssVersion": "string",
			"sinaAppKey": "string",
			"dynamicLogin": "int",
			"enableTakeaway": "boolean",
			"tuanActivityUrl": "string",
			"enableNewPay": "boolean",
			"minimumReviewWord": "int",
			"enableCheckinLocation": "boolean",
			"cooperationUrl": "string",
			"mcWeixinUrl": "string",
			"feedDetailUrl": "string",
			"landingPageUrl": "string",
			"availableMCUrl": "string",
			"disableHotelGuide": "boolean",
			"waxPatchOverride": "boolean",
			"waxPatchUrl": "string",
			"enableCardGift": "boolean",
			"disableQRGrouponVerify": "boolean",
			"enableAvailableListWeb": "boolean",
			"disableSceneryOrder": "boolean",
			"enableCard": "boolean",
			"enableYY": "boolean",
			"notifyrewardurl": "string",
			"enableDrawSearch": "boolean",
			"appstorerating": "boolean",
			"configLocationExpire": "int",
			"configLocateRangeMap": "int",
			"configLocateAccuracy": "int",
			"configDistanceFactor": "double",
			"versionNote": "string",
			"url": "string",
			"versionName": "string",
			"version": "string"
	},
	"BookingShopSearchJsonResult":{
			"jsonShopList": "string"
	},
	"PayOrderResult":{
			"orderTips": "OrderTips",
			"failContent": "string",
			"failTitle": "string",
			"failStatus": "int",
			"selectDealId": "int",
			"bizTags": "string[]",
			"luckyMoney": "LuckyMoney",
			"extraInfo": "Pair[]",
			"orderId": "int",
			"relativeDeal": "Deal",
			"bonus": "string[]",
			"shareList": "Share[]",
			"receiptList": "Coupon[]",
			"status": "int"
	},
	"MovieBooking":{
			"maxBookingCount": "int",
			"locktime": "int",
			"fee": "int",
			"disableMovieBooking": "boolean"
	},
	"UploadFileResult":{
			"status": "boolean",
			"message": "string",
			"fileUrl": "string"
	},
	"MovieEvent":{
			"remindLink": "string",
			"remindStatus": "int",
			"image": "string",
			"follow": "int",
			"maxJoin": "int",
			"endDate": "string",
			"beginDate": "string",
			"title": "string",
			"uid": "int"
	},
	"DealDetailConfig":{
			"dealDetailBuySubConfig": "DealDetailBuySubConfig"
	},
	"LuckyMoney":{
			"buttonText": "string",
			"jumpUrl": "string",
			"share": "Share",
			"title": "string",
			"titleJL": "string",
			"subTitle": "string",
			"subTitleJL": "string",
			"total": "int",
			"picUrl": "string"
	},
	"PageModule":{
			"luckyMoney": "LuckyMoney"
	},
	"HuiDetail":{
			"shortTitle": "string",
			"lat": "double",
			"lng": "double",
			"salesDesc": "string",
			"relatedDealId": "int",
			"eventList": "Event[]",
			"imageTitle": "string",
			"payShopName": "string",
			"detailPhotos": "string[]",
			"bigPhoto": "string",
			"photo": "string",
			"relevantHuiList": "Hui[]",
			"structedDetails": "Pair[]",
			"bestShop": "DealShop",
			"payUrl": "string",
			"detailConfig": "HuiDetailConfig"
	},
	"MemberPointJournalRecord":{
			"orderId": "int",
			"detail": "string",
			"desc": "string",
			"isIncome": "boolean",
			"amount": "int",
			"time": "string",
			"uid": "int"
	},
	"UserFeed":{
			"followNoteCount": "int",
			"flowerCount": "int",
			"feedReferId": "int",
			"feedId": "int",
			"feedStar": "int",
			"feedImages": "ImageInfo[]",
			"feedContent": "string",
			"user": "UserProfile",
			"shop": "Shop",
			"addTime": "time",
			"feedDesc": "string",
			"feedType": "int"
	},
	"UserFeedList":{
			"ugcReportLink": "Link",
			"userFeeds": "UserFeed[]"
	},
	"FeedPhotoInfo":{
			"url": "string",
			"thumbUrl": "string",
			"picId": "int"
	},
	"FeedPhoto":{
			"list": "FeedPhotoInfo"
	},
	"HUICommentResult":{
			"result": "boolean"
	},
	"HuiTicketShareDo":{
			"ticketValue": "string",
			"extraTickets": "string",
			"ticketValidPeriod": "string",
			"ticketButtonClickable": "boolean",
			"ticketButtonText": "string",
			"payTicketDesc": "string",
			"ticketDesc": "string",
			"ticketPicUrl": "string",
			"ticketTitle": "string",
			"ticketShareStatus": "int",
			"shareDo": "ShareDo"
	},
	"ImageInfo":{
			"shopPhoto": "ShopPhoto",
			"bigUrl": "string",
			"middleUrl": "string",
			"smallUrl": "string",
			"picId": "int"
	},
	"BookSuggestList":{
			"list": "BookSuggest[]"
	},
	"BookSuggest":{
			"desc": "string",
			"word": "string"
	},
	"FeedReview":{
			"followId": "int",
			"content": "string",
			"replyUserPic": "string",
			"replyNick": "string",
			"replyUid": "int",
			"userPic": "string",
			"nick": "string",
			"uid": "int"
	},
	"HomeDesignBid":{
			"intMode": "int",
			"duration": "string",
			"price": "string",
			"mode": "string",
			"url": "string"
	},
	"HomeDesignFeature":{
			"sign": "int",
			"userAction": "string",
			"cost": "string",
			"name": "string",
			"url": "string"
	},
	"FeedLikeUser":{
			"pic": "string",
			"nick": "string",
			"uid": "int"
	},
	"LocalPushData":{
			"localPushList": "LocalPush[]"
	},
	"HuiDetailConfig":{
			"huiDetailBuySubConfig": "HuiDetailBuySubConfig"
	},
	"MoviePurchaseTips":{
			"normalTips": "string",
			"specialTips": "string"
	},
	"MenuCategory":{
			"dishList": "MenuDishList",
			"recommend": "boolean",
			"rank": "int",
			"name": "string",
			"uid": "int"
	},
	"MenuDishList":{
			"list": "MenuDish[]"
	},
	"BrandStory":{
			"url": "string",
			"desc": "string",
			"title": "string"
	},
	"DealDetailBuySubConfig":{
			"buyUrl": "string",
			"priceStrikeThrough": "boolean",
			"buttonEnable": "boolean",
			"buttonText": "string"
	},
	"HuiDetailBuySubConfig":{
			"priceStrikeThrough": "boolean",
			"buttonEnable": "boolean",
			"buttonText": "string"
	},
	"SplashImgInfo":{
			"showNumber": "int",
			"picUrl": "string",
			"picID": "int",
			"adTrafficUrl": "AdTrafficUrl",
			"adUrl": "string",
			"isDefault": "boolean",
			"picShowTime": "int",
			"serialId": "int",
			"endTime": "string",
			"startTime": "string"
	},
	"ShopMenu":{
			"categories": "MenuCategory[]"
	},
	"MenuDishDetail":{
			"shareUrl": "string",
			"shopName": "string",
			"shareIcon": "string",
			"shareContent": "string",
			"shareTitle": "string",
			"pictureUrl": "string",
			"desc": "string"
	},
	"MenuFavorite":{
			"dishFavList": "int[]",
			"dishFavCount": "int"
	},
	"TAPair":{
			"state": "boolean"
	},
	"RsShopPrepayInfo":{
			"prepayContent": "string",
			"prepayTitle": "string",
			"currencySign": "string",
			"jsFunction": "string",
			"prepayStatus": "int"
	},
	"RsRecrodPrepayInfo":{
			"cancelFree": "int",
			"payStatus": "int",
			"currencySign": "string",
			"prepayRecordId": "int",
			"prepayAmount": "string",
			"desc": "string[]",
			"title": "string"
	},
	"DeleteOrderDo":{
			"code": "int",
			"message": "string"
	},
	"FNShopKtvResvWidget":{
			"promos": "string[]"
	},
	"FNShopKtvHeaderWidget":{
			"picTotalCount": "int",
			"pictures": "string[]"
	},
	"RsCancelResult":{
			"bookingRecord": "BookingRecord",
			"content": "string",
			"title": "string",
			"resultCode": "int"
	},
	"QueueShopSummary":{
			"buttonText": "string",
			"shortMsg": "string",
			"msg": "string",
			"enabled": "boolean"
	},
	"QueueOrder":{
			"menuOrderTip": "string",
			"menuOrderDo": "MenuOrder",
			"failedDesc": "string",
			"shopState": "int",
			"invalid": "boolean",
			"orderId": "string",
			"tableName": "string",
			"shopId": "int",
			"shopName": "string",
			"tableNum": "string",
			"state": "int",
			"stateNotice": "string",
			"expireNotice": "string",
			"wait": "string",
			"waitTime": "string",
			"createTime": "string",
			"updateTime": "string"
	},
	"Queue":{
			"max": "int",
			"min": "int",
			"tableType": "int",
			"tableName": "string",
			"wait": "string",
			"waitTime": "string"
	},
	"QueueShopDetail":{
			"reminderInfo": "QueueReminderInfo",
			"shopInfo": "QueueShopInfo",
			"tableHeader": "string",
			"tableTip": "string",
			"peopleNumberText": "string",
			"vendor": "string",
			"furtherLoopInterval": "int",
			"firstLoopInterval": "int",
			"peopleNumList": "int[]",
			"defaultPeople": "int",
			"mobile": "string",
			"hasInterest": "boolean",
			"invalidWhenExpired": "boolean",
			"state": "int",
			"expireNotice": "string",
			"notice": "string",
			"subNotice": "string",
			"timeNotice": "string",
			"order": "QueueOrder",
			"queueList": "Queue[]"
	},
	"QueueOrderList":{
			"listTip": "string",
			"orderList": "QueueOrder[]"
	},
	"CouponEntryDo":{
			"unit": "string",
			"text": "string",
			"url": "string",
			"count": "int"
	},
	"AppInfoDo":{
			"helpTips": "string",
			"hotLine": "string",
			"logoUrl": "string",
			"appName": "string",
			"appId": "int"
	},
	"DpClubShopDo":{
			"avgPrice": "int",
			"shopPic": "string",
			"categoryName": "string",
			"regionName": "string",
			"status": "int",
			"shopPower": "int",
			"address": "string",
			"distance": "string",
			"phoneNo": "string",
			"branchName": "string",
			"shopName": "string",
			"shopId": "int",
			"dpClubId": "int"
	},
	"DpClubProductDo":{
			"endDate": "string",
			"beginDate": "string",
			"status": "int",
			"productType": "string",
			"productDesc": "string",
			"productName": "string",
			"dpClubId": "int"
	},
	"DPClubStatisticsDo":{
			"totalMembers": "int"
	},
	"BookProduct":{
			"originPrice": "string",
			"action": "string",
			"promoList": "string[]",
			"imgUrl": "string",
			"price": "string",
			"title": "string"
	},
	"TrieCell":{
			"first": "string",
			"second": "string",
			"third": "string"
	},
	"BeautyTechnician":{
			"star": "int",
			"detailPageUrl": "string",
			"photoUrl": "string",
			"title": "string",
			"certified": "int",
			"name": "string",
			"uid": "int"
	},
	"QueueOrderResult":{
			"order": "QueueOrder",
			"resultMsg": "string",
			"resultCode": "int"
	},
	"DrinkTable":{
			"drinkDeal": "TrieCell[]",
			"title": "string"
	},
	"MovieRedeemVoucher":{
			"redeemVoucherCode": "string",
			"maxSeatCount": "int",
			"redeemAmount": "string",
			"order": "Order",
			"buyLink": "string",
			"subTitle": "string",
			"title": "string",
			"status": "int",
			"tipForDetail": "string",
			"tipForList": "string",
			"enableSelectSeat": "boolean",
			"movie": "Movie",
			"uid": "int"
	},
	"MovieRedeemVoucherList":{
			"list": "MovieRedeemVoucher[]"
	},
	"ConfirmOrderResponse":{
			"toUseMT": "boolean",
			"unifiedOrderId": "string",
			"redirectUrl": "string",
			"advanceOrderId": "string",
			"intervalTime": "int",
			"retryCount": "int",
			"flag": "int",
			"alertMsg": "AlertMsg",
			"orderID": "int"
	},
	"RefundDest":{
			"moreDesc": "string",
			"type": "int",
			"title": "string",
			"desc": "string"
	},
	"RefundApplication":{
			"toast": "string",
			"refundAll": "boolean",
			"orderId": "int",
			"rrefundType": "int",
			"refundAmount": "string",
			"desc": "string",
			"refundReasons": "Pair[]",
			"refundTip": "string",
			"title": "string",
			"refundQuantity": "int",
			"refundDests": "RefundDest[]"
	},
	"AbstractDiscountTool":{
			"mutexDiscountTools": "int[]",
			"canUse": "boolean",
			"desc": "string",
			"name": "string",
			"uid": "int"
	},
	"CamerateInfo":{
			"tags": "string[]",
			"name": "string",
			"url": "string"
	},
	"MovieMessageCount":{
			"unReadMsgCount": "string"
	},
	"UserLevel":{
			"title": "string",
			"pic": "string",
			"url": "string",
			"pow": "int"
	},
	"NewCustomerRecom":{
			"tagType": "int",
			"recommends": "NewCustomerItem[]",
			"promoSchema": "string",
			"promoTitle": "string",
			"sectionTitle": "string"
	},
	"NewCustomerItem":{
			"icon": "string",
			"schema": "string",
			"richTitle": "string",
			"richSubTitle": "string",
			"background": "string"
	},
	"AdvancedPic":{
			"count": "int",
			"scheme": "string",
			"uploadTime": "long",
			"name": "string",
			"url": "string",
			"thumbUrl": "string"
	},
	"CountDownInfo":{
			"needCountDown": "boolean",
			"remainSecond": "int"
	},
	"Navi":{
			"type": "int",
			"extraId": "int",
			"subLayout": "int",
			"subs": "Navi[]",
			"color": "string",
			"icon": "string",
			"highLight": "boolean",
			"count": "int",
			"selected": "boolean",
			"selectable": "boolean",
			"enName": "string",
			"name": "string",
			"uid": "int"
	},
	"MovieReductionAmountPair":{
			"reductionAmountAfterRedeem": "string",
			"redeemSeatCount": "int"
	},
	"FindBbsPage":{
			"list": "FindBbsTopic[]",
			"url": "string",
			"title": "string"
	},
	"DealGroup":{
			"detailUrl": "string",
			"dealChannelTags": "string[]",
			"salesDesc": "string",
			"discountDesc": "string",
			"count": "int",
			"overdueAutoRefund": "boolean",
			"isAutoRefund": "boolean",
			"dealID": "int",
			"photo": "string",
			"originalPrice": "double",
			"price": "double",
			"shopIDs": "string",
			"contentTitle": "string",
			"shortTitle": "string",
			"title": "string",
			"dealTitle": "string",
			"uid": "int"
	},
	"CitiesConfig":{
			"nearBy": "City[]",
			"hotOverSeas": "City[]",
			"cities": "City[]"
	},
	"ReviewExpense":{
			"desc": "string",
			"value": "double",
			"title": "string"
	},
	"ReviewExtInfo":{
			"desc": "string",
			"values": "string[]",
			"title": "string"
	},
	"FreeBook":{
			"totalCount": "string",
			"remark": "string",
			"orderViewActionLabel": "string",
			"orderViewAction": "string",
			"bookAgainActionLabel": "string",
			"bookAgainAction": "string",
			"type": "int",
			"promoList": "string[]",
			"desc": "string",
			"action": "string"
	},
	"HomeBannerNew":{
			"url": "string",
			"pic": "string",
			"secondTitle": "string",
			"firstTitle": "string",
			"order": "int",
			"cityIDs": "int[]"
	},
	"ReviewOperationInfo":{
			"link": "string"
	},
	"HotelRankListResult":{
			"hotelRankLists": "HotelRankList[]",
			"rankList": "Link[]"
	},
	"CpmAdResult":{
			"cpmAdList": "CpmAd[]",
			"tag": "string"
	},
	"RefundableResult":{
			"orderId": "int",
			"refundType": "Pair[]",
			"itemId": "int",
			"isRefundable": "boolean",
			"shopList": "Shop[]"
	},
	"HomeAlbum":{
			"url": "string",
			"picCount": "int",
			"coverImg": "string",
			"albumID": "int",
			"styleName": "string",
			"order": "int",
			"cityIDs": "int[]"
	},
	"HomeContent":{
			"linkUrl": "string",
			"picUrl": "string",
			"title": "string",
			"articleID": "int",
			"sort": "int",
			"cityIDs": "int[]"
	},
	"HomeContents":{
			"url": "string",
			"contents": "HomeContent[]"
	},
	"ReviewAbstract":{
			"hotelLabelId": "int",
			"rankType": "int",
			"count": "int",
			"affection": "int",
			"name": "string"
	},
	"HomeAlbumWrap":{
			"url": "string",
			"albums": "HomeAlbum[]"
	},
	"PaymentResult":{
			"paySessionId": "string",
			"queueInfo": "QueueInfo",
			"actionList": "ResultAction[]",
			"resultCode": "int"
	},
	"ShopActivity":{
			"url": "string",
			"title": "string"
	},
	"ShopMenuAlbum":{
			"url": "string",
			"picUrl": "string",
			"priceText": "string",
			"subTitle": "string",
			"title": "string"
	},
	"ShopBanner":{
			"bannerTitle": "string",
			"bannerUrl": "string"
	},
	"HbtDishDo":{
			"shopId": "int",
			"orderable": "int",
			"price": "string",
			"name": "string",
			"dishId": "int"
	},
	"HbtCategoryDishesDo":{
			"unCategorized": "int",
			"name": "string",
			"categoryId": "int",
			"dishes": "HbtDishDo[]"
	},
	"ReviewConfirmResult":{
			"dishItems": "TakeAwayOrderItem[]"
	},
	"Element":{
			"elementId": "string",
			"needLogin": "boolean",
			"order": "int",
			"group": "int",
			"url": "string",
			"iconUrl": "string",
			"subTitle": "string",
			"title": "string",
			"tagId": "string"
	},
	"ElementList":{
			"list": "Element[]"
	},
	"WeddingGroupon":{
			"regionName": "string",
			"tag": "int",
			"status": "int",
			"isLimitPerUser": "boolean",
			"isMemberCard": "boolean",
			"canUseDiscount": "boolean",
			"canUseBalance": "boolean",
			"canRefund": "boolean",
			"bigPhoto": "string",
			"photo": "string",
			"latitude": "double",
			"longitude": "double",
			"originalPrice": "double",
			"price": "double",
			"buyMixCount": "int",
			"buyLimit": "int",
			"count": "int",
			"dealTitlePrefix": "string",
			"title": "string",
			"dealTitle": "string",
			"contentTitle": "string",
			"shortTitle": "string",
			"uid": "int"
	},
	"WeddingGrouponList":{
			"list": "WeddingGroupon[]"
	},
	"RedAlert":{
			"countSuf": "string",
			"countMax": "int",
			"countText": "string",
			"extData": "RedAlertExt.json",
			"showCount": "int",
			"depends": "string[]",
			"version": "string",
			"showText": "string",
			"tagId": "string"
	},
	"RedAlertList":{
			"list": "RedAlert[]"
	},
	"HbtReleaseShop":{
			"defaultPic": "string",
			"mainCategoryName": "string",
			"regionName": "string",
			"avgPrice": "int",
			"shopPower": "int",
			"branchName": "string",
			"shopName": "string",
			"shopID": "int"
	},
	"AccountBind":{
			"state": "int",
			"name": "string"
	},
	"AccountBindResult":{
			"bindList": "AccountBind[]",
			"shouldShow": "boolean"
	},
	"AddressCard":{
			"picUrl": "string",
			"address": "string[]",
			"name": "string[]",
			"title": "string"
	},
	"ClickEntity":{
			"tileId": "string",
			"icon": "string",
			"scheme": "string",
			"subTitle": "string",
			"title": "string"
	},
	"OverseasShopRank":{
			"items": "ClickEntity[]",
			"title": "string"
	},
	"OverseaShopExtraInfo":{
			"maptype": "int",
			"ranks": "OverseasShopRank",
			"awards": "OverseasShopRank"
	},
	"CarService":{
			"uid": "int",
			"summary": "string",
			"actionLabel": "string",
			"action": "string",
			"promo": "string",
			"currentPrice": "double",
			"originPrice": "double",
			"desc": "string",
			"name": "string"
	},
	"FeedNavi":{
			"feedTypeList": "Pair[]"
	},
	"OptimalDiscount":{
			"usePoint": "boolean",
			"useHongBao": "boolean",
			"coupon": "Discount",
			"reductionId": "int",
			"quantity": "int"
	},
	"HobbitOrderMenuDo":{
			"orderID": "string",
			"orderMenu": "string"
	},
	"MovieTicketOrderList":{
			"list": "MovieTicketOrder[]",
			"deleteToast": "string"
	},
	"ShopHotelInfo":{
			"hotelRankText": "string",
			"hotelRank": "int"
	},
	"UniOrder":{
			"statusBgColor": "string",
			"channelPic": "string",
			"orderPic": "string",
			"event": "string",
			"title": "string",
			"buttonUrl": "string",
			"buttonStyle": "int",
			"buttonText": "string",
			"clickUrl": "string",
			"text1": "string",
			"text2": "string",
			"channel": "string",
			"orderId": "int",
			"time": "string",
			"statusText": "string"
	},
	"UniOrderList":{
			"nextTime": "string",
			"list": "UniOrder[]"
	},
	"RedeemVouncherResult":{
			"otherMovieLink": "string",
			"redeemVoucherDetailLink": "string",
			"showTimeTip": "string",
			"instruction": "string"
	},
	"IndexTabIcon":{
			"buId": "int",
			"index": "int",
			"clickId": "int",
			"hotName": "string",
			"url": "string",
			"title": "string",
			"icon": "string"
	},
	"SaleItem":{
			"label": "string",
			"bizId": "string",
			"background": "string",
			"feedback": "string",
			"richSubTitle": "string",
			"richTitle": "string",
			"schema": "string",
			"icon": "string"
	},
	"IndexSales":{
			"indexProm": "IndexProm",
			"saleItemList": "SaleItem[]"
	},
	"BestShopTuanReview":{
			"avatar": "string",
			"avgPrice": "int",
			"userName": "string",
			"starNum": "int",
			"content": "string",
			"shopName": "string",
			"rateId": "int",
			"pictureList": "Picture[]"
	},
	"BestShopTuanReviewList":{
			"reviewType": "int",
			"tagType": "int",
			"totalReview": "int",
			"list": "BestShopTuanReview[]"
	},
	"Technician":{
			"pointLevel": "int",
			"starLevel": "int",
			"star": "int",
			"detailPageUrl": "string",
			"photoUrl": "string",
			"title": "string",
			"certified": "int",
			"name": "string",
			"uid": "int"
	},
	"TechniciansResult":{
			"style": "int",
			"shopId": "int",
			"addUrl": "string",
			"listUrl": "string",
			"technicians": "Technician[]",
			"count": "int",
			"title": "string"
	},
	"GroupOnBookingShopVO":{
			"shopName": "string",
			"shopId": "int"
	},
	"GroupOnBookingShopList":{
			"list": "GroupOnBookingShopVO[]"
	},
	"WatchIndexRecom":{
			"datasource": "int",
			"overdue": "int",
			"recomList": "WatchIndexRecomItem[]"
	},
	"FriendReview":{
			"friendReviewCount": "int",
			"canBeBind": "boolean",
			"friendReviewList": "Review[]"
	},
	"HomeDiary":{
			"cityIDs": "int[]",
			"sort": "int",
			"articleID": "int",
			"title": "string",
			"picUrl": "string",
			"linkUrl": "string"
	},
	"HomeDiaries":{
			"diaries": "HomeDiary[]",
			"url": "string"
	},
	"MovieDeal":{
			"dealId": "int",
			"maxJoin": "int",
			"buyLink": "string",
			"uid": "int",
			"buykLink": "string",
			"price": "double",
			"marketPrice": "double",
			"title": "string",
			"photo": "string"
	},
	"MovieDealList":{
			"title": "string",
			"list": "MovieDeal[]"
	},
	"TicketStatusResult":{
			"snackDealOrder": "MovieDealOrder",
			"titleForStatus": "string",
			"messageTip": "string",
			"movieName": "string",
			"seatNameList": "string[]",
			"hallName": "string",
			"shopName": "string",
			"showTime": "time",
			"qRCodeTip": "string",
			"qRCode": "string",
			"ticketCodeList": "Pair[]",
			"tipForResult": "string",
			"linkForMyTicketOrders": "string",
			"linkForBuyTicket": "string",
			"ticketMachineIamgeUrl": "string",
			"ticketMachinePosition": "string",
			"tipForStatus": "string",
			"ticketStatus": "int"
	},
	"TakeawayMsg":{
			"code": "int",
			"content": "string"
	},
	"FoodBookInfo":{
			"isBookable": "boolean",
			"bookUrl": "string",
			"title": "string"
	},
	"MovieShowBlockList":{
			"movieDiscountList": "MovieDiscount[]",
			"list": "MovieShowBlock[]"
	},
	"MovieSeatPriceList":{
			"list": "MovieSeatPrice[]"
	},
	"HotCity":{
			"url": "string"
	},
	"WatchIndexRecomItem":{
			"shopPower": "int",
			"shopId": "int",
			"title": "string",
			"image": "string"
	},
	"HBTSkuDo":{
			"orgPrice": "double",
			"praised": "int",
			"highlightTip": "string",
			"hintTip": "string",
			"type": "int",
			"status": "int",
			"price": "double",
			"name": "string",
			"skuId": "int"
	},
	"HBTCategoryDo":{
			"skus": "HBTSkuDo[]",
			"name": "string",
			"categoryId": "int"
	},
	"CardCategories":{
			"cardCategory": "CardCategory[]"
	},
	"HBTGiftDo":{
			"number": "string",
			"giftTag": "string",
			"desc": "string",
			"validTo": "long",
			"validFrom": "long",
			"skuItem": "HBTSkuDo",
			"giftId": "int"
	},
	"PrepayOrderInfo":{
			"displayMsg": "string",
			"amountTitle": "string",
			"promptMsg": "string",
			"needConfirm": "boolean",
			"confirmContent": "string",
			"productInfo": "string",
			"productTitle": "string",
			"countDownInfo": "CountDownInfo",
			"count": "int",
			"discountAmount": "double",
			"amount": "double"
	},
	"HBTShoppingCartEntryDo":{
			"simpleSetSkuInCart": "SimpleSetSkuInCart[]",
			"spec": "string[]",
			"setMealSkus": "HBTPair[]",
			"skusOriginPrice": "double",
			"skuUnit": "string",
			"giftTag": "string",
			"actId": "int",
			"desc": "string",
			"isChecked": "boolean",
			"giftId": "int",
			"skusPrice": "double",
			"skuQuantity": "int",
			"skuName": "string",
			"skuId": "int"
	},
	"HBTButton":{
			"actionUrl": "string",
			"iconUrl": "string",
			"buttonText": "string"
	},
	"HBTShoppingCartDo":{
			"huiPayDiscount": "HuiPayDiscount",
			"giftDishes": "HBTShoppingCartEntryDo[]",
			"baseDishes": "HBTShoppingCartEntryDo[]",
			"totalPrice": "double"
	},
	"TakeAwayNotice":{
			"msg": "string",
			"buttonList": "string[]",
			"type": "int"
	},
	"OrderCheckResultDo":{
			"richMessage": "string",
			"status": "int",
			"message": "string"
	},
	"CashierDesk":{
			"quickPayBankElements": "QuickPayBankElement[]",
			"paymentTools": "PaymentTool[]",
			"userBalance": "double",
			"giftCardBalance": "double",
			"canUseBalance": "boolean",
			"canUseGiftCardBalance": "boolean"
	},
	"DealGroupDetailInfo":{
			"reviewType": "int",
			"hotelDealGroupDetailInfo": "HotelDealGroupDetailInfo",
			"tagType": "int",
			"uid": "int",
			"interested": "boolean",
			"reviewRatio": "string",
			"totalReviewRecommend": "string",
			"totalReview": "string",
			"dealComments": "DealComment[]",
			"structedDetails": "Pair[]",
			"detailInfo": "Pair[]",
			"extra": "Pair[]"
	},
	"WeddingProductPrice":{
			"values": "string[]",
			"productID": "int"
	},
	"WeddingProductPriceList":{
			"productPrices": "WeddingProductPrice[]",
			"headers": "string[]",
			"shopID": "int"
	},
	"AddPoiWifiDo":{
			"code": "int",
			"msg": "string"
	},
	"HBTBanner":{
			"bannerID": "int",
			"url": "string",
			"image": "string",
			"text": "string"
	},
	"HBTGiftGuideDo":{
			"url": "string",
			"msg": "string",
			"highlightTip": "string"
	},
	"WeddingScrollPic":{
			"desc": "Pair[]",
			"picUrl": "string"
	},
	"WeddingScrollPicList":{
			"list": "WeddingScrollPic[]",
			"title": "string"
	},
	"HuiPayDiscount":{
			"payAmount": "string",
			"huiAmount": "string",
			"huiDisplay": "string"
	},
	"AddPhotoResult":{
			"msg": "string",
			"code": "int",
			"picKey": "string"
	},
	"SearchCity":{
			"country": "string",
			"city": "City"
	},
	"TakeOrder":{
			"scheme": "string",
			"subTitle": "string",
			"title": "string",
			"canOrder": "boolean"
	},
	"BookInfo":{
			"totalCount": "string",
			"promo": "string",
			"remark": "string",
			"bookAgainActionLabel": "string",
			"bookAgainAction": "string",
			"orderViewAction": "string",
			"orderViewActionLabel": "string",
			"bookAction": "string",
			"bookActionLabel": "string",
			"type": "int",
			"content": "string"
	},
	"FNShopTicket":{
			"promos": "string[]",
			"buyUrl": "string",
			"detailUrl": "string",
			"price": "double",
			"marketPrice": "double",
			"name": "string"
	},
	"FNShopTicketGroup":{
			"shopTickets": "FNShopTicket[]",
			"minPrice": "double",
			"ticketType": "string"
	},
	"FNShopTicketWidget":{
			"showable": "boolean",
			"ticketGroups": "FNShopTicketGroup[]"
	},
	"DishShop":{
			"tag": "string",
			"rank": "ClickEntity",
			"defaultPic": "string",
			"desc": "string",
			"name": "string"
	},
	"DishDealGroup":{
			"subTitle": "string",
			"moreUrl": "string",
			"deals": "Deal[]",
			"title": "string"
	},
	"HotMarketInfo":{
			"shopid": "string",
			"distance": "string",
			"title": "string",
			"pic": "string",
			"scheme": "string"
	},
	"HotMarket":{
			"url": "string",
			"hotMarketInfos": "HotMarketInfo[]",
			"title": "string"
	},
	"ShopSearchResult":{
			"tabTitleIcon": "string",
			"subTabTitle": "string",
			"tabTitle": "string",
			"naviUrl": "string",
			"naviTitle": "string"
	},
	"FNScenicBriefWidget":{
			"scenicDetailURL": "string",
			"briefIntro": "string",
			"showable": "boolean"
	},
	"BindPhotoInfo":{
			"title": "string",
			"height": "int",
			"width": "int",
			"picKey": "string",
			"picId": "int"
	},
	"ShopNearby":{
			"subTitle": "string",
			"icon": "string",
			"name": "string",
			"url": "string"
	},
	"EduBookingInfo":{
			"bookingTitle": "string",
			"bookingBtnText": "string",
			"bookingPageUrl": "string"
	},
	"EduShopExtendedInfoDo":{
			"picList": "EduShopPicListInfoDo[]",
			"chatLink": "string",
			"phoneTag": "int",
			"videoTip": "EduVideoTipInfo",
			"bookingNumberText": "string",
			"picCount": "int",
			"userMobile": "string",
			"bookingBtnText": "string",
			"promoInfoList": "EduPromoInfo[]",
			"defaultImg": "string",
			"bookingInfo": "EduBookingInfo",
			"cooperateType": "int",
			"reviewCount": "int",
			"avgPrice": "int"
	},
	"HotPromo":{
			"publishTime": "string",
			"title": "string",
			"subTitle": "string",
			"time": "string",
			"tag": "string",
			"url": "string",
			"pic": "string",
			"desc": "string",
			"showTop": "boolean"
	},
	"HotPromoList":{
			"hotPromos": "HotPromo[]",
			"title": "string",
			"url": "string",
			"count": "int"
	},
	"EduProductDo":{
			"extendText": "string",
			"tag": "EduProductTag",
			"videoTag": "string",
			"lessonPeriods": "string",
			"priceStr": "string",
			"originPriceStr": "string",
			"productDetailPageUrl": "string",
			"uid": "int",
			"name": "string",
			"defaultPic": "string",
			"showPriceType": "int",
			"price": "int",
			"originPrice": "int",
			"flags": "int"
	},
	"EduProductListDo":{
			"productCategoryList": "EduProductCategory[]",
			"tip": "string",
			"list": "EduProductDo[]",
			"productListPageUrl": "string",
			"type": "int",
			"categoryDesc": "string",
			"coverStyleType": "int"
	},
	"HeaderPic":{
			"totalHits": "string",
			"coop": "boolean",
			"logo": "string",
			"pic": "string",
			"count": "int"
	},
	"RichButton":{
			"titleColor": "string",
			"subTitle": "string",
			"title": "string",
			"targetUrl": "string",
			"picUrl": "string"
	},
	"ExtSearchRecord":{
			"feedback": "string",
			"distanceText": "string",
			"priceText": "string",
			"star": "int",
			"labelIconUrl": "string",
			"rankInfo": "string",
			"heat": "string",
			"keywordType": "int",
			"tagInfo": "string",
			"topInfo": "string",
			"displayContents": "DisplayContent[]",
			"displayType": "int",
			"titleUrl": "string",
			"desc": "string",
			"logoUrl": "string",
			"type": "string",
			"title": "string",
			"uid": "string"
	},
	"DisplayContent":{
			"countText": "string",
			"iconUrl": "string",
			"count": "int",
			"titleUrl": "string",
			"picUrl": "string",
			"title": "string"
	},
	"ReviewShopList":{
			"tabType": "int",
			"idList": "int[]",
			"nameList": "string[]"
	},
	"HighQualityDealDO":{
			"promoList": "ProductPromo[]",
			"dealChannelTag": "string",
			"uid": "int",
			"price": "double",
			"title": "string",
			"recommendation": "string",
			"productType": "int",
			"productURL": "string"
	},
	"HighQualityDealResult":{
			"moduleTitle": "string",
			"showNum": "int",
			"title": "string",
			"dealList": "HighQualityDealDO[]"
	},
	"ViewItem":{
			"mtDeal": "MTDealBase",
			"mtShop": "MtPoiModel",
			"uiType": "int",
			"hotelZeus": "SpuInfoDTO",
			"cell": "Cell",
			"shop": "Shop",
			"queryId": "string",
			"agg": "ViewAggItem",
			"hui": "HuiDetail",
			"deal": "Deal",
			"link": "string",
			"type": "int",
			"title": "string",
			"viewId": "int"
	},
	"UserSet":{
			"show": "boolean",
			"url": "string",
			"title": "string"
	},
	"PicLink":{
			"smallPicUrl": "string",
			"uid": "int",
			"picUrl": "string",
			"name": "string",
			"url": "string"
	},
	"GroupOn":{
			"deals": "DealList"
	},
	"DealEvent":{
			"needLogin": "boolean",
			"desc": "string",
			"color": "string",
			"type": "int",
			"shortTitle": "string",
			"tag": "string",
			"uid": "string",
			"discount": "double",
			"memo": "string"
	},
	"AppShopAdBean":{
			"themeID": "int",
			"title": "string",
			"specialAdList": "PicLink[]",
			"tag": "string",
			"shopAdList": "ShopAd[]"
	},
	"ShopAd":{
			"promoInfos": "AdPromoInfo[]",
			"serviceTags": "string[]",
			"title": "string",
			"clickURL": "string",
			"structuredInfo": "string",
			"tag": "string",
			"originalPrice": "string",
			"price": "string",
			"content": "string",
			"feedback": "string",
			"mark": "string",
			"regionName": "string",
			"shopType": "int",
			"distanceStr": "string",
			"secondCategory": "string",
			"displayID": "int",
			"branchName": "string",
			"shopName": "string",
			"shopID": "int",
			"imgUrl": "string",
			"star": "int",
			"launchID": "int"
	},
	"HBTPopup":{
			"cancelButton": "HBTButton",
			"oKButton": "HBTButton",
			"desc": "string",
			"title": "string"
	},
	"GetUploadPicSignResult":{
			"signature": "string"
	},
	"HuiReviewInfo":{
			"commentLabel": "string",
			"tip": "string",
			"title": "string",
			"status": "int"
	},
	"ViewAggItem":{
			"moreText": "string",
			"showCount": "int",
			"aggItems": "ViewItem[]",
			"mainItem": "ViewItem"
	},
	"MenuCategoryNav":{
			"uid": "int",
			"name": "string"
	},
	"MenuSortNav":{
			"name": "string",
			"uid": "int"
	},
	"HBTPair":{
			"value": "string",
			"key": "string"
	},
	"HBTQueryOrderDetailDo":{
			"orderGroupEntries": "HBTDishGroupEntryDo[]",
			"refundBtn": "HBTButton",
			"dealId": "int",
			"orderButtonSubTitle": "string",
			"groupOnInfo": "HBTGroupOnInfo",
			"showOrderDetailFlag": "int",
			"viewBarCodeNo": "string",
			"reviewInfo": "HBTReviewInfo",
			"shopName": "string",
			"viewId": "string",
			"shopId": "int",
			"tableId": "string",
			"queryInterval": "int",
			"queryTimes": "int",
			"payScheme": "string",
			"buttonList": "string[]",
			"onlinePayFlag": "int",
			"barCodeComments": "string",
			"barCodeNo": "string",
			"barCodeFlag": "int",
			"shopType": "int",
			"status": "int",
			"orderEntries": "HBTShoppingCartEntryDo[]",
			"subInfos": "HBTPair[]",
			"mainInfos": "HBTPair[]",
			"barTitle": "string",
			"subTitle": "string",
			"title": "string"
	},
	"MenuItem":{
			"isDiscountSetMeal": "boolean",
			"genusType": "int",
			"saleTime": "string",
			"isDishLiked": "boolean",
			"status": "int",
			"packageDishPrice": "string",
			"dishSet": "SingleDish[]",
			"validityDesc": "string",
			"validity": "boolean",
			"dishType": "int",
			"tags": "string[]",
			"unit": "string",
			"detailUrl": "string",
			"desc": "string",
			"soldOut": "boolean",
			"menuEvent": "MenuEvent",
			"recomCount": "int",
			"dishSales": "string",
			"dishTaste": "string",
			"originPrice": "string",
			"picUrl": "string",
			"id": "int",
			"name": "string"
	},
	"IndexOps":{
			"NewCustomerRecom": "NewCustomerRecom",
			"indexSales": "IndexSales",
			"indexAds": "IndexAdsDo",
			"bannerInfo": "BannerInfo"
	},
	"MenuEvent":{
			"purchase": "int",
			"giftCount": "int",
			"eventDesc": "string",
			"discount": "string",
			"menuGift": "MenuGift",
			"freeCount": "int",
			"buyCount": "int",
			"type": "int"
	},
	"Menu":{
			"shopName": "string",
			"avgPrice": "int",
			"totalRecom": "int",
			"list": "MenuItem[]",
			"currentCategory": "int",
			"currentSort": "int",
			"menuSortNavList": "MenuSortNav[]",
			"menuCategoryNavList": "MenuCategoryNav[]"
	},
	"WedProperties":{
			"firstTagValue": "string",
			"group": "string",
			"tagValue": "string",
			"tagIconUrl": "string",
			"tagName": "string",
			"tagNameID": "int"
	},
	"WedPropertiesList":{
			"showPropertiesModule": "boolean",
			"list": "WedProperties[]"
	},
	"MenuExtraInfo":{
			"remarkTitle": "string",
			"tableCodeMode": "int",
			"orderRemark": "OrderRemark",
			"orderExtraFee": "OrderExtraFeeItem",
			"shopHuiInfo": "SelectDishShopHuiInfo",
			"seatFee": "SeatFee",
			"avgPrice": "int",
			"shopName": "string",
			"dishMenuEntrance": "DishMenuEntrance",
			"orderButtonSubTitle": "string",
			"smartShopUrl": "string",
			"isSmartShop": "boolean",
			"orderBanner": "MenuBanner",
			"isEstimate": "boolean",
			"isOrderDish": "boolean",
			"isPrePaySupport": "boolean",
			"menuBanner": "MenuBanner",
			"tableIdSupport": "boolean",
			"orderId": "int"
	},
	"UserHistoryDish":{
			"dishCount": "int",
			"dishId": "int"
	},
	"UserHistoryMenu":{
			"userHistoryDishList": "UserHistoryDish[]",
			"userHistoryGiftList": "MenuGift[]"
	},
	"DishPhotoList":{
			"list": "ShopPhoto[]",
			"photoTagList": "string[]"
	},
	"SearchResultExtraInfo":{
			"switchCityTips": "string",
			"headlineShareSubTitle": "string",
			"headlineShareTitle": "string",
			"recAdGuildKeywords": "string",
			"hospitalEntryUrl": "string",
			"hospitalEntryTitle": "string",
			"guideKeywords": "string",
			"weddingBanquetTitle": "string",
			"weddingBanquetUrl": "string",
			"topWeddingShopCount": "int"
	},
	"ShopServiceInfo":{
			"promoInfo": "string",
			"type": "int",
			"title": "string",
			"scheme": "string",
			"extraInfo": "string"
	},
	"ShopServiceList":{
			"shopServices": "ShopServiceInfo[]"
	},
	"MenuBanner":{
			"tag": "string",
			"url": "string",
			"text": "string"
	},
	"MenuGift":{
			"genusType": "int",
			"actId": "int",
			"giftId": "int",
			"activityTime": "string",
			"dishId": "int",
			"name": "string"
	},
	"HomeModuleList":{
			"subTitle": "string",
			"icon": "string",
			"link": "string",
			"title": "string",
			"viewItems": "ViewItem[]"
	},
	"SpuInfoDTO":{
			"tag": "int",
			"imgUrl": "string",
			"sellVol": "int",
			"endDate": "long",
			"beginDate": "long",
			"marketPrice": "double",
			"price": "double",
			"imgUrls": "string",
			"subTitle": "string",
			"title": "string",
			"spuId": "int"
	},
	"RelatedCities":{
			"hotOverSeaCities": "City[]",
			"hotLocalCities": "City[]",
			"relatedCities": "City[]"
	},
	"MovieDiscount":{
			"markOnDate": "boolean",
			"ruleList": "string[]",
			"label": "string",
			"hint": "string",
			"uid": "int"
	},
	"CouponProduct":{
			"subTitle": "string",
			"unavailableDesc": "string",
			"discountConditionDo": "DiscountConditionDo",
			"couponRule": "string",
			"ownedDealCount": "int",
			"dealGroupId": "int",
			"dealId": "int",
			"realAmount": "string",
			"originAmount": "string",
			"couponId": "int",
			"ticketId": "int",
			"couponValue": "string",
			"desc": "string",
			"validPeriod": "string",
			"title": "string",
			"productType": "int",
			"unifiedId": "string"
	},
	"UnifiedCashierDo":{
			"supportDPDiscount": "int",
			"feedbackUrl": "string",
			"bookRecordId": "string",
			"depositId": "string",
			"jsRuleArray": "string[]",
			"isNewUser": "int",
			"mainProductCode": "int",
			"productCodeString": "string",
			"mobileNo": "string",
			"couponDescTitle": "string",
			"couponProducts": "CouponProduct[]",
			"couponDescUrl": "string",
			"bizOrderId": "string",
			"bizOrderType": "int",
			"thirdPartyOrderId": "string",
			"thirdPartyOrderType": "int",
			"jsFunction": "string",
			"noDiscountInputUrl": "string",
			"enableNoDiscountInput": "string"
	},
	"NearByWiFiItem":{
			"type": "int",
			"detailInfoSchema": "string",
			"picUrl": "string",
			"tagType": "int",
			"tags": "string[]",
			"subTitle": "string",
			"mainTitle": "string"
	},
	"PromoDesk":{
			"shopCoupon": "CouponPromoTool",
			"promptMsg": "string",
			"optimalPromoTools": "OptimalPromoTool[]",
			"point": "PointPromoTool",
			"hongBao": "HongBaoPromoTool",
			"discount": "DiscountPromoTool",
			"coupon": "CouponPromoTool"
	},
	"HotelDealGroupDetailInfo":{
			"detailUrl": "string",
			"isChoiceDealGroup": "boolean",
			"bookingProcessUrl": "string",
			"bookingInfoList": "HotelDealGroupBookingInfo[]",
			"isHotelBookable": "boolean",
			"buyButtonEnabled": "boolean",
			"reviewListUrl": "string"
	},
	"CommonPic":{
			"url": "string"
	},
	"NetFriendRecommand":{
			"recommendPics": "CommonPic[]",
			"recommendTags": "string",
			"promoColor": "string",
			"promoTitle": "string",
			"title": "string",
			"url": "string"
	},
	"UniCashierCreateOrderDo":{
			"payToken": "string",
			"tradeno": "string",
			"orderCreateTime": "string",
			"serializedId": "string",
			"mainProductCode": "int",
			"payOrderResults": "UniCashierPayResultDo[]",
			"message": "string",
			"orderStatus": "int",
			"orderId": "int"
	},
	"WeddingSceneInfo":{
			"coverPicHeight": "int",
			"coverPicWidth": "int",
			"largePicUrl": "string",
			"coverPicUrl": "string",
			"title": "string"
	},
	"WeddingSceneInfoList":{
			"weddingSceneInfoList": "WeddingSceneInfo[]",
			"available": "int",
			"title": "string"
	},
	"GeneralRankEntity":{
			"pic": "string",
			"url": "string",
			"subTitle": "string",
			"hot": "string",
			"desc": "string",
			"titile": "string"
	},
	"GeneralRank":{
			"generalRanks": "GeneralRankEntity[]",
			"url": "string",
			"name": "string"
	},
	"ShopToHomeDo":{
			"h5Url": "string",
			"orderNo": "string",
			"shopPromos": "string[]",
			"toHomeName": "string"
	},
	"CouponPromoTool":{
			"canUse": "boolean",
			"mutexTools": "int[]",
			"uid": "int"
	},
	"HomeSearchIcon":{
			"url": "string"
	},
	"UniCashierEntryDo":{
			"richPromosDesc": "string",
			"uniCashierBtnTag": "string",
			"hasCashierEntry": "boolean",
			"uniCashierUrl": "string",
			"uniCashierBtn": "string",
			"promosDesc": "string"
	},
	"HongBaoPromoTool":{
			"productCodes": "int[]",
			"promoCipher": "string",
			"mutexTools": "int[]",
			"balance": "double",
			"canUse": "boolean",
			"uid": "int"
	},
	"PointPromoTool":{
			"productCode": "int",
			"pointExchangeRules": "PointExchangeRule[]",
			"mutexTools": "int[]",
			"pointBalance": "int",
			"canUse": "boolean",
			"uid": "int"
	},
	"PointExchangeRule":{
			"promoCipher": "string",
			"pointAmount": "int",
			"promoAmount": "double",
			"memo": "string",
			"uid": "int"
	},
	"DiscountPromoEvent":{
			"remainQuantity": "int",
			"uid": "int",
			"canUse": "boolean",
			"promoCipher": "string",
			"orderPriceLimit": "double",
			"promoAmount": "double",
			"desc": "string",
			"title": "string"
	},
	"DiscountPromoEventGroup":{
			"mutexProductCodes": "int[]",
			"icon": "string",
			"productCode": "int",
			"mutexTools": "int[]",
			"discountPromoEvents": "DiscountPromoEvent[]"
	},
	"DiscountPromoTool":{
			"discountPromoEventGroups": "DiscountPromoEventGroup[]",
			"uid": "int"
	},
	"UniOrderTabsInfo":{
			"tabsInfo": "Pair[]"
	},
	"HBTEntryDo":{
			"urlSchema": "string",
			"tips": "string",
			"title": "string",
			"isHobbitShop": "boolean"
	},
	"HospitalRegisteringInfo":{
			"show": "boolean",
			"url": "string",
			"icon": "string",
			"subTitle": "string",
			"title": "string"
	},
	"ShopStyle":{
			"picMode": "string",
			"shopView": "string"
	},
	"PromoDeskCoupon":{
			"calculateNoDiscountAmount": "boolean",
			"desc": "string",
			"orderPriceLimit": "double",
			"canUse": "boolean",
			"promoCipher": "string",
			"productCode": "int",
			"price": "string",
			"expireDate": "string",
			"title": "string",
			"uid": "int"
	},
	"PromoDeskCouponList":{
			"unavailableShopCouponList": "PromoDeskCoupon[]",
			"shopCouponList": "PromoDeskCoupon[]",
			"unavailableList": "PromoDeskCoupon[]",
			"nextStartIndex": "int",
			"startIndex": "int",
			"isEnd": "boolean",
			"list": "PromoDeskCoupon[]"
	},
	"UpdatedDishInfo":{
			"packageDishSaleTime": "string",
			"packageDishPrice": "string",
			"dishType": "int",
			"validity": "boolean",
			"dishesPackage": "SingleDish[]",
			"type": "int",
			"menuEvent": "MenuEvent",
			"count": "int",
			"price": "string",
			"originPrice": "string",
			"name": "string",
			"id": "int"
	},
	"UpdatedGiftInfo":{
			"type": "int",
			"count": "int",
			"name": "string",
			"actId": "int",
			"giftId": "int",
			"dishId": "int"
	},
	"WedPropertiesAll":{
			"groupProperties": "WedGroupProperties[]",
			"list": "WedProperties[]"
	},
	"HospitalRegistringUrl":{
			"url": "string"
	},
	"HotelReviewAbstract":{
			"filterId": "int",
			"labelId": "int",
			"name": "string",
			"count": "int"
	},
	"HotelNewReview":{
			"id": "int",
			"user": "UserProfile",
			"star": "int",
			"time": "time",
			"reviewBody": "string",
			"images": "string[]",
			"likeNum": "int",
			"canReply": "boolean",
			"reviewCount": "int"
	},
	"EduShopDetailInfoDo":{
			"tip": "string",
			"envPicLink": "string",
			"brandHonorLink": "string",
			"brandHonor": "string",
			"brandStory": "string",
			"title": "string",
			"detailLink": "string",
			"characteristics": "string[]",
			"envPics": "string[]",
			"envPicWidth": "int",
			"envPicHeight": "int"
	},
	"UniCashierPayResultDo":{
			"payOrderId": "int",
			"productCode": "int"
	},
	"GeoPoint":{
			"lat": "double",
			"lng": "double",
			"coordType": "string"
	},
	"MovieUser":{
			"userTag": "string",
			"userId": "int",
			"consumedCinema": "string",
			"gender": "int",
			"infoLink": "string",
			"sign": "string",
			"avatar120c120": "string",
			"avatar1024c1024": "string",
			"nickName": "string"
	},
	"OrderReviewData":{
			"orderId": "int",
			"text": "string",
			"textJL": "string",
			"buttonText": "string",
			"url": "string",
			"type": "int"
	},
	"EduCategoryShopInfoDo":{
			"icon": "string",
			"shopListUrl": "string",
			"tuanCount": "int",
			"categoryName": "string"
	},
	"EduAroundShopInfoDo":{
			"detailLink": "string",
			"categoryShopInfoList": "EduCategoryShopInfoDo[]",
			"title": "string"
	},
	"MessageInfo":{
			"signature": "string",
			"plazaImage": "string",
			"userID": "int",
			"subType": "int",
			"type": "int",
			"uid": "int",
			"uRL": "string",
			"unreadCount": "int",
			"time": "string",
			"image": "string",
			"content": "string",
			"title": "string"
	},
	"ReviewRecommend":{
			"detailURL": "string",
			"uid": "int",
			"recommendType": "int",
			"referToken": "string",
			"actionURL": "string",
			"actionDate": "string",
			"shopId": "int",
			"dealId": "int",
			"orderId": "int",
			"imgURL": "string",
			"subTitle": "string",
			"title": "string",
			"activityText": "string",
			"recommendReason": "string"
	},
	"MessageInfoList":{
			"list": "MessageInfo[]"
	},
	"UploadedPhotoInfo":{
			"star": "string",
			"bigUrl": "string",
			"thumbUrl": "string",
			"tagName": "string",
			"price": "string",
			"photoName": "string",
			"photoId": "int"
	},
	"ReviewRecommendResult":{
			"headButtonUrl": "string",
			"headButtonText": "string",
			"headBannerInfo": "string",
			"headBannerUrl": "string",
			"showLimit": "int",
			"type": "int",
			"list": "ReviewRecommend[]"
	},
	"EduSchoolMajorInfoDo":{
			"detailLink": "string",
			"majorList": "string[]",
			"title": "string"
	},
	"RankItem":{
			"url": "string",
			"icon": "string",
			"tags": "string[]",
			"title": "string",
			"id": "int"
	},
	"EduSchoolRankingInfoDo":{
			"detailLink": "string",
			"ranking": "int",
			"title": "string"
	},
	"Attribute":{
			"extra": "string",
			"value": "string",
			"name": "string"
	},
	"CommunityDesc":{
			"attributes": "Attribute[]",
			"subTitle": "string",
			"title": "string"
	},
	"HomeNewCustomSection":{
			"tags": "string",
			"bodyUnits": "HomeClickUnit[]",
			"headerUnit": "HomeClickUnit"
	},
	"HomeRichSection":{
			"richUnits": "HomeClickUnit[]"
	},
	"HomeRecommendSection":{
			"recomUnits": "HomeClickUnit[]"
	},
	"HomeTravelUnit":{
			"tags": "string[]"
	},
	"HomeTravelSection":{
			"bodyUnits": "HomeTravelUnit[]",
			"headerUnit": "HomeClickUnit"
	},
	"HomeTimerUnit":{
			"originPrice": "string",
			"isSaleOut": "boolean",
			"tag": "string",
			"url": "string",
			"eventType": "int",
			"endTime": "string",
			"startTime": "string"
	},
	"HomeTimerSection":{
			"richUnits": "HomeClickUnit[]",
			"leftTimerUnit": "HomeTimerUnit"
	},
	"EduSchoolExtendedInfoDo":{
			"showPersonTitle": "string",
			"showPersonUrl": "string",
			"defaultImg": "string",
			"schoolTagList": "string[]"
	},
	"EduSchoolSimpleInfoDo":{
			"detailLink": "string",
			"tagList": "string[]",
			"introduction": "string",
			"title": "string"
	},
	"EduSchoolRelationInfoDo":{
			"num": "int",
			"schoolSimpleInfoList": "EduSchoolSimpleInfoDo[]"
	},
	"MovieUserBehavior":{
			"contentThumbImages": "string[]",
			"abstractTitle": "string",
			"behaviorTypeId": "int",
			"content": "string",
			"contentHref": "string",
			"referContent": "string",
			"score": "int",
			"thumbImage": "string",
			"thumbImageHref": "string",
			"contentImages": "string[]"
	},
	"DirectZoneResult":{
			"list": "DirectZoneRecord[]"
	},
	"DirectZoneRecord":{
			"titleAbstract": "string",
			"picUrl": "string",
			"title": "string",
			"subtitle": "string",
			"clickTips": "string",
			"clickUrl": "string"
	},
	"IndexOpsModuleList":{
			"opsModuleList": "string"
	},
	"UniCoupon":{
			"headTitle": "string",
			"id": "int",
			"type": "int",
			"color": "string",
			"couponName": "string",
			"clickUrl": "string",
			"desc": "string",
			"tips": "string",
			"timeDesc": "string",
			"statusText": "string",
			"imageUrl": "string"
	},
	"UniCouponType":{
			"name": "string",
			"type": "int"
	},
	"FilterType":{
			"name": "string",
			"type": "int"
	},
	"SortType":{
			"name": "string",
			"type": "int"
	},
	"UniCouponNavi":{
			"couponType": "UniCouponType",
			"filterTypeList": "FilterType[]",
			"sortTypeList": "SortType[]"
	},
	"UniCouponList":{
			"pager": "string",
			"moreUrl": "string",
			"list": "UniCoupon[]",
			"navis": "UniCouponNavi[]"
	},
	"SkinInfo":{
			"channelNameTextColor": "string",
			"searchTextColor": "string",
			"cityTextColor": "string"
	},
	"SkinConfig":{
			"promoSchema": "string",
			"endDate": "string",
			"startDate": "string",
			"md5": "string",
			"url": "string",
			"available": "boolean"
	},
	"OTAShortReviewDo":{
			"addDate": "string",
			"reviewBody": "string"
	},
	"ScoreItemDo":{
			"oTAShortReviewList": "OTAShortReviewDo[]",
			"score": "double",
			"scoreName": "string"
	},
	"OTAScoreDo":{
			"score": "double",
			"name": "string"
	},
	"TAPoiAddress":{
			"requestId": "string",
			"poiId": "int",
			"lat": "double",
			"lng": "double",
			"type": "int",
			"poiDesc": "string",
			"poi": "string"
	},
	"TASuggestPoiResult":{
			"poiResults": "TAPoiAddress[]"
	},
	"PlazaBanner":{
			"bgPicUrl": "string",
			"url": "string",
			"subTitle": "string",
			"title": "string"
	},
	"PlazaTopic":{
			"bannerPicUrl": "string",
			"sameCityPriority": "boolean",
			"isFollowed": "boolean",
			"viewCount": "int",
			"followCount": "int",
			"contentCount": "int",
			"topicId": "int",
			"url": "string",
			"picUrl": "string",
			"title": "string"
	},
	"PlazaTopicList":{
			"list": "PlazaTopic[]"
	},
	"PlazaPicTag":{
			"topicId": "int",
			"isRight": "boolean",
			"yPosition": "double",
			"xPosition": "double",
			"content": "string"
	},
	"PlazaPic":{
			"containerHeight": "int",
			"containerWidth": "int",
			"plazaPicTags": "PlazaPicTag[]",
			"shopId": "int",
			"shopName": "string",
			"picUrl": "string",
			"picSmallUrl": "string"
	},
	"PlazaFeedList":{
			"list": "PlazaFeed[]"
	},
	"FavorUser":{
			"favTime": "string",
			"user": "PlazaUser"
	},
	"FavorUserList":{
			"list": "FavorUser[]"
	},
	"PlazaComment":{
			"isShopReply": "boolean",
			"noteType": "int",
			"commentId": "int",
			"content": "string",
			"time": "string",
			"user": "PlazaUser"
	},
	"GlobalSearchResult":{
			"naviTitle": "string",
			"naviUrl": "string",
			"title": "string"
	},
	"PlazaCommentList":{
			"list": "PlazaComment[]"
	},
	"PlazaStarUser":{
			"feedCount": "int",
			"user": "PlazaUser"
	},
	"PlazaStarUserList":{
			"url": "string",
			"list": "PlazaStarUser[]"
	},
	"SuggestPoi":{
			"shopAddress": "string",
			"shopName": "string",
			"shopId": "int"
	},
	"SuggestTag":{
			"count": "int",
			"tagName": "string"
	},
	"SuggestPoiList":{
			"list": "SuggestPoi[]"
	},
	"SuggestTagList":{
			"list": "SuggestTag[]"
	},
	"UserHomeFeed":{
			"editUrl": "string",
			"reviewType": "int",
			"mainId": "string",
			"isGoodReview": "boolean",
			"actionUrl": "string",
			"poi": "UserHomeFeedPoi",
			"feedType": "int"
	},
	"UserHomeFeedList":{
			"list": "UserHomeFeed[]"
	},
	"QueueInfo":{
			"waitingContent": "string",
			"waitingTime": "int"
	},
	"ShopPhotoInfo":{
			"success": "boolean",
			"height": "int",
			"width": "int",
			"picId": "int",
			"tagName": "string",
			"star": "int",
			"price": "string",
			"picKey": "string",
			"title": "string"
	},
	"PlazaPhotoInfo":{
			"success": "boolean",
			"height": "int",
			"width": "int",
			"picId": "int",
			"picKey": "string",
			"containerHeight": "int",
			"containerWidth": "int",
			"shopId": "int",
			"tagList": "PlazaPicTag[]"
	},
	"SearchDirectZoneResult":{
			"expandType": "int",
			"list": "SearchDirectZoneRecord[]"
	},
	"SearchDirectZoneRecord":{
			"tagList": "AdBrandTag[]",
			"rightItemList": "DirectZoneItem[]",
			"leftItemList": "DirectZoneItem[]",
			"extraInfo": "DirectZoneExtraInfo.json",
			"property": "string",
			"rightBottomItem": "DirectZoneItem",
			"leftBottomItem": "DirectZoneItem",
			"rightTopItem": "DirectZoneItem",
			"leftTopItem": "DirectZoneItem",
			"displayContent": "DisplayContent[]",
			"displayType": "int",
			"clickUrl": "string",
			"picLabel": "string",
			"picUrl": "string",
			"title": "string",
			"uid": "string"
	},
	"DirectZoneItem":{
			"align": "int",
			"iconUrl": "string",
			"text": "string",
			"type": "int"
	},
	"UserCode":{
			"userCodes": "string"
	},
	"MovieRefundApplication":{
			"refundApplicationRemindMsg": "string",
			"title": "string",
			"refundQuantity": "int",
			"orderId": "int",
			"refundTip": "string",
			"refundReasons": "Pair[]",
			"refundDests": "Pair[]",
			"refundAmount": "string"
	},
	"MovieRefundDetail":{
			"orderid": "int",
			"processItems": "ProcessItem[]",
			"refundToAccount": "string",
			"refundAmount": "string",
			"refundQuantity": "int"
	},
	"CodeScheme":{
			"desc": "string",
			"status": "int",
			"title": "string",
			"schemeTitle": "string",
			"scheme": "string"
	},
	"HomePromotionSection":{
			"promotionUnits": "HomeClickUnit[]"
	},
	"VirtualUnifiedCashierDo":{
			"couponDescTitle": "string",
			"couponProducts": "CouponProduct[]",
			"couponDescUrl": "string"
	},
	"QueueShopInfo":{
			"distance": "string",
			"star": "int",
			"address": "string",
			"shopName": "string",
			"shopId": "int"
	},
	"DarenIcon":{
			"url": "string",
			"pic": "string",
			"title": "string"
	},
	"DarenInfo":{
			"feedCount": "int",
			"followCount": "int",
			"fanCount": "int",
			"darenIcons": "DarenIcon[]"
	},
	"FanInfo":{
			"userFace": "string",
			"isFollow": "boolean",
			"fanCount": "int",
			"userId": "int",
			"nickName": "string",
			"feedCount": "int"
	},
	"FanList":{
			"list": "FanInfo[]"
	},
	"FollowInfo":{
			"feedCount": "int",
			"fanCount": "int",
			"isFollow": "boolean",
			"userFace": "string",
			"nickName": "string",
			"userId": "int"
	},
	"FollowList":{
			"list": "FollowInfo[]"
	},
	"SimpleReceipt":{
			"isShowCode": "boolean",
			"uid": "int",
			"status": "int",
			"serialNumber": "string",
			"clientDate": "time",
			"isThirdParty": "boolean",
			"thirdPartySn": "string",
			"thirdPartyPasswd": "string",
			"memberCard": "boolean",
			"usageHint": "Pair[]"
	},
	"AggregatedReceipt":{
			"status": "int",
			"refundInfo": "ReceiptRefundInfo",
			"simpleReceipts": "SimpleReceipt[]"
	},
	"AggregatedReceiptList":{
			"list": "AggregatedReceipt[]"
	},
	"RefundNotification":{
			"show": "boolean",
			"msg": "string",
			"record": "string"
	},
	"UserHomeFeedPoi":{
			"defaultPhoto": "string",
			"avgPrice": "int",
			"distance": "string",
			"category": "string",
			"region": "string",
			"star": "int",
			"shopName": "string",
			"shopId": "int"
	},
	"Doctor":{
			"jumpUrl": "string",
			"likeCount": "int",
			"title": "string",
			"picUrl": "string",
			"name": "string"
	},
	"DepartmentInfo":{
			"jumpUrl": "string",
			"departments": "Department[]",
			"title": "string",
			"count": "int",
			"isShow": "boolean"
	},
	"PlazaSimpleMsg":{
			"id": "string",
			"content": "string",
			"statusCode": "int"
	},
	"HospitalRankInfo":{
			"healthInsurance": "string",
			"isShow": "boolean",
			"rank": "string",
			"defaultImg": "string"
	},
	"ClinicTimeInfo":{
			"time": "string",
			"isShow": "boolean"
	},
	"GeneralTicketDeal":{
			"isNeedLogin": "boolean",
			"imgUrl": "string",
			"ticketTitleTag": "string",
			"infoList": "string[]",
			"promoTagList": "ProductPromoDO[]",
			"salesVolume": "int",
			"originPrice": "double",
			"price": "double",
			"ticketTitle": "string",
			"url": "string",
			"dealId": "int"
	},
	"GeneralTicketGroup":{
			"showNum": "int",
			"iconType": "int",
			"url": "string",
			"totalCount": "int",
			"generalTicketDealList": "GeneralTicketDeal[]",
			"ticketGroupTitleTag": "string",
			"ticketGroupTitle": "string"
	},
	"TypicalTicketDeal":{
			"isNeedLogin": "boolean",
			"saleCount": "int",
			"marketPrice": "double",
			"buyUrl": "string",
			"infoList": "string[]",
			"promoTagList": "ProductPromoDO[]",
			"titleTag": "string",
			"price": "double",
			"ticketTitle": "string",
			"url": "string",
			"dealId": "int"
	},
	"TypicalTicket":{
			"showNum": "int",
			"originPrice": "double",
			"bestPrice": "double",
			"typicalTicketDealList": "TypicalTicketDeal[]",
			"ticketType": "string"
	},
	"TypicalTicketGroup":{
			"typicalTicketList": "TypicalTicket[]"
	},
	"ScenicTicketGroupList":{
			"shouldShow": "boolean",
			"generalTicketGroupList": "GeneralTicketGroup[]",
			"typicalTicketGroup": "TypicalTicketGroup"
	},
	"WeddingShopCaseInfo":{
			"casePicList": "string[]",
			"properties": "Pair[]",
			"picEntityList": "WeddingPic[]",
			"caseId": "int",
			"special": "int",
			"bookingBtnText": "string",
			"coverPicList": "string[]",
			"title": "string",
			"defaultPic": "string",
			"picWidth": "int",
			"picHeight": "int"
	},
	"Department":{
			"jumpUrl": "string",
			"name": "string"
	},
	"WeddingShopCaseInfoList":{
			"picWidth": "int",
			"picHeight": "int",
			"productCategoryId": "int",
			"topNav": "Pair[]",
			"searchNav": "WeddingProductSearchNav",
			"available": "int",
			"list": "WeddingShopCaseInfo[]",
			"desc": "string",
			"title": "string"
	},
	"QueueReminderInfo":{
			"remindTimeDesc": "string",
			"timeRange": "time[]",
			"remindTime": "time",
			"status": "int",
			"desc": "string",
			"title": "string"
	},
	"QueueReminderResult":{
			"reminderInfo": "QueueReminderInfo",
			"resultMsg": "string",
			"resultCode": "int"
	},
	"CategoryNav":{
			"name": "string",
			"uid": "int",
			"count": "int"
	},
	"BalanceItem":{
			"status": "int",
			"title": "string",
			"amount": "string",
			"url": "string"
	},
	"Balance":{
			"items": "BalanceItem[]"
	},
	"ModulesConfig":{
			"config": "string"
	},
	"SingleDish":{
			"groupName": "string",
			"count": "int",
			"dish": "MenuItem"
	},
	"DishDetail":{
			"dishes": "SingleDish[]",
			"desc": "string"
	},
	"WeddingPic":{
			"largePic": "string",
			"smallPic": "string"
	},
	"MovieNaviItem":{
			"dateList": "time[]",
			"movie": "Movie"
	},
	"OptimalPromoTool":{
			"shopCoupon": "PromoDeskCoupon",
			"coupon": "PromoDeskCoupon",
			"productCode": "int",
			"quantity": "int",
			"discountId": "int",
			"useHongBao": "boolean",
			"usePoint": "boolean"
	},
	"MovieDatePair":{
			"date": "time",
			"movieID": "int"
	},
	"MovieDiscountNaviItem":{
			"movieDateList": "MovieDatePair[]",
			"movieDiscount": "MovieDiscount"
	},
	"MovieShowBlockNew":{
			"buyTicketButtonList": "BuyTicketButton[]",
			"specifiedDate": "time",
			"movieTipList": "MovieTip[]",
			"movieShowList": "MovieShow[]",
			"discountNaviList": "MovieDiscountNaviItem[]",
			"movieNaviList": "MovieNaviItem[]"
	},
	"NearbyBusiness":{
			"shopNearbys": "ShopNearby[]"
	},
	"HomePromotionBarSection":{
			"homeHotActivities": "HomeHotActivityUnit[]",
			"leftTimerUnit": "HomeTimerUnit"
	},
	"ShopDisplayTag":{
			"icon": "string",
			"type": "int",
			"text": "string"
	},
	"ShopDealInfo":{
			"subDealTitle": "string",
			"tagInfo": "ShopDisplayTag[]",
			"dealTitle": "string",
			"dealType": "int"
	},
	"HomeHotActivityUnit":{
			"titleType": "string",
			"picUrl": "string"
	},
	"ScenicOtherDeal":{
			"saleCount": "int",
			"url": "string",
			"promoList": "ProductPromoDO[]",
			"price": "double",
			"title": "string",
			"uid": "int"
	},
	"ScenicOtherDealList":{
			"shouldShow": "boolean",
			"scenicOtherDealList": "ScenicOtherDeal[]",
			"otherDealTitle": "string",
			"otherDealShowNum": "int"
	},
	"ShopProductPriceNav":{
			"type": "int",
			"priceTo": "int",
			"priceFrom": "int",
			"showText": "string"
	},
	"WedGroupProperties":{
			"propertyList": "WedProperties[]",
			"groupName": "string"
	},
	"NearbyPark":{
			"shopId": "int",
			"distanceDesc": "string",
			"leftPark": "int",
			"totalPark": "int",
			"address": "string",
			"name": "string",
			"picUrl": "string"
	},
	"NearbyParkList":{
			"parkListUrl": "string",
			"list": "NearbyPark[]"
	},
	"TuanHomeConfig":{
			"keywords": "CellList",
			"categories": "CellList",
			"moduleGroups": "ModuleGroup[]"
	},
	"ShopParkInfo":{
			"isShowParkInfo": "int",
			"remindDesc": "string",
			"providerInfo": "string",
			"priceInfo": "string",
			"priceUnit": "string",
			"price": "string",
			"distance": "string",
			"leftPark": "int",
			"totalPark": "int"
	},
	"UnClickEntity":{
			"icon": "string",
			"type": "string"
	},
	"ModuleGroup":{
			"moduleKeys": "string[]"
	},
	"MoviePayDiscountBlock":{
			"reductionDiscounts": "MovieDiscountPayOption[]",
			"canCombineDiscountPayment": "boolean",
			"canUseDiscount": "boolean",
			"availableDiscountCount": "int",
			"availableRedeemVoucherCount": "int",
			"defaultReductionDiscount": "MovieDiscountPayOption",
			"availableReductionDiscountCount": "int",
			"canCombineRedectionAndRedeem": "boolean",
			"canUseMultiRedeemVoucher": "boolean",
			"canUseRedeem": "boolean",
			"defaultRedeemVouchers": "MovieRedeemVoucher[]"
	},
	"EduPinkeInfoDo":{
			"activityId": "int",
			"picUrl": "string",
			"name": "string",
			"currentPrice": "int",
			"percent": "int",
			"savePrice": "int",
			"saveDescription": "string",
			"detailLink": "string"
	},
	"EduShopPinkeInfoDo":{
			"title": "string",
			"pinkeInfoList": "EduPinkeInfoDo[]",
			"count": "int"
	},
	"TripMode":{
			"isTour": "boolean",
			"mode": "int",
			"msg": "string",
			"status": "int"
	},
	"ReviewWithPic":{
			"userFace": "string",
			"userName": "string",
			"reviewBody": "string",
			"url": "string",
			"picUrl": "string",
			"shopID": "int",
			"shopName": "string"
	},
	"FitnessCourse":{
			"promoList": "string[]",
			"stockStatus": "string",
			"price": "string",
			"subName": "string",
			"name": "string",
			"url": "string",
			"endTime": "string",
			"startTime": "string"
	},
	"FitnessDailyCourse":{
			"courseDay": "string",
			"courses": "FitnessCourse[]",
			"tip": "string"
	},
	"FitnessCurriculum":{
			"dailyCourses": "FitnessDailyCourse[]",
			"title": "string"
	},
	"ScenicDealUseFlow":{
			"structedDetails": "Pair[]"
	},
	"ShopSupportServices":{
			"supportServices": "string[]",
			"title": "string"
	},
	"KTVBookRoom":{
			"mtAppBookingUrl": "string",
			"mtRichTextRoomComment": "string",
			"mtBookingUrl": "string",
			"richTextRoomComment": "string",
			"periodType": "int",
			"period": "string",
			"priceUnit": "string",
			"roomComment": "string",
			"originalPrice": "string",
			"reductions": "string[]",
			"mBookingUrl": "string",
			"buttonName": "string",
			"status": "int",
			"bookingUrl": "string",
			"singHours": "string",
			"price": "string",
			"roomCapacity": "string",
			"roomType": "string",
			"defaultItemId": "int",
			"displayName": "string"
	},
	"KTVBookPeriod":{
			"defaultSelected": "boolean",
			"ktvBookRooms": "KTVBookRoom[]",
			"endTime": "long",
			"displayName": "string",
			"startTime": "long"
	},
	"KTVBookDate":{
			"ktvRoomTypes": "KTVRoomType[]",
			"discount": "string",
			"ktvBookPeriods": "KTVBookPeriod[]",
			"date": "string",
			"week": "string",
			"displayName": "string"
	},
	"KTVBookTable":{
			"shopId": "int",
			"saleCountInfo": "string",
			"promos": "string[]",
			"showable": "boolean",
			"ktvBookDates": "KTVBookDate[]"
	},
	"ShopMain":{
			"hasMemcard": "boolean",
			"hasMopay": "boolean",
			"hasQueueable": "boolean",
			"hasTakeAway": "boolean",
			"categoryId": "int",
			"distanceText": "string",
			"avgPrice": "int",
			"shopPower": "int",
			"branchName": "string",
			"defaultPic": "string",
			"name": "string",
			"uid": "int",
			"matchText": "string",
			"hasBankCard": "boolean",
			"iconCount": "int",
			"hasBookSetting": "boolean",
			"hasPromo": "boolean",
			"hasGroupon": "boolean"
	},
	"ShopMainList":{
			"shopName": "string",
			"branchName": "string",
			"distance": "string",
			"defaultPic": "string",
			"isEnd": "boolean",
			"recordCount": "int",
			"startIndex": "int",
			"nextStartIndex": "int",
			"currentFloor": "string",
			"list": "Shop[]",
			"categoryNavs": "CategoryNav[]",
			"sortNavs": "Pair[]",
			"floorNavs": "string[]",
			"currentCategory": "CategoryNav",
			"currentSort": "Pair"
	},
	"ScenicOrderDealDetail":{
			"effectiveDuration": "string",
			"price": "double",
			"title": "string"
	},
	"MarketPoster":{
			"title": "string",
			"posterCount": "int",
			"subTitle": "string",
			"marketPosterImages": "MarketPosterImage[]",
			"url": "string"
	},
	"MarketPosterImage":{
			"tags": "ClothesImageTag[]",
			"onlineTime": "string",
			"posterId": "int",
			"smallImageUrl": "string",
			"bigImageUrl": "string"
	},
	"EduBeautyPeopleDo":{
			"name": "string",
			"detailLink": "string",
			"picUrl": "string",
			"praiseCount": "int"
	},
	"EduBeautyPeopleModuleDo":{
			"peopleModuleType": "int",
			"title": "string",
			"beautyPeopleList": "EduBeautyPeopleDo[]",
			"count": "int",
			"beautyRankTitle": "string",
			"rankDescription": "string",
			"rankUrl": "string"
	},
	"EduSchoolBeautyDo":{
			"beautyPeopleModuleList": "EduBeautyPeopleModuleDo[]",
			"count": "int"
	},
	"MarketCard":{
			"url": "string",
			"countInfo": "string",
			"promoInfo": "string",
			"title": "string",
			"picUrl": "string"
	},
	"MarketCardList":{
			"marketCards": "MarketCard[]",
			"url": "string",
			"count": "int",
			"title": "string"
	},
	"EduSchoolBeautyRankingInfoDo":{
			"title": "string",
			"ranking": "int",
			"rankDescription": "string",
			"detailLink": "string"
	},
	"EduPromoInfo":{
			"title": "string",
			"content": "string"
	},
	"EduBookingResultInfo":{
			"errorMsg": "string",
			"bookingCallBackUrl": "string"
	},
	"MarketBusInfo":{
			"url": "string",
			"title": "string"
	},
	"ShopInfoForPhoto":{
			"shopName": "string",
			"shopPhotoCategory": "string[]"
	},
	"PointProduct":{
			"dealSelectsEnable": "bool[]",
			"stockDescType": "int",
			"lng": "double",
			"lat": "double",
			"dealSelectsDesc": "string[]",
			"dealSelects": "DealSelect[]",
			"interested": "boolean",
			"listPic": "string",
			"detailPics": "string[]",
			"originalPrice": "double",
			"buttonText": "string",
			"buttonType": "int",
			"stockDesc": "string",
			"tagContent": "string",
			"tagType": "int",
			"needReservation": "boolean",
			"exchangedNum": "int",
			"subTitle": "string",
			"title": "string",
			"selectPointPrices": "int[]",
			"pointPrice": "int",
			"productGroupId": "int",
			"productType": "int"
	},
	"PointProductOrderSubmissionResult":{
			"status": "int"
	},
	"PointProductOrder":{
			"shipmentStatus": "int",
			"shipment": "string",
			"extra": "Pair[]",
			"delivery": "Delivery",
			"deliveryType": "Pair",
			"voucherPrice": "double",
			"status": "string",
			"statusColor": "string",
			"time": "time",
			"icon": "string",
			"iconText": "string",
			"pointProductDetail": "string",
			"orderId": "int",
			"productId": "int",
			"productGroupId": "int",
			"productType": "int",
			"pointProductNum": "int",
			"pointPrice": "int",
			"totalPointPrice": "int",
			"title": "string",
			"desc1": "string",
			"desc2": "string",
			"image": "string"
	},
	"PointProductOrderList":{
			"list": "PointProductOrder[]"
	},
	"PointProductOrderApplication":{
			"productId": "int",
			"productGroupId": "int",
			"productType": "int",
			"deliveryType": "Pair[]",
			"pageText": "string",
			"buttonText": "string",
			"maxBuyCount": "int",
			"minBuyCount": "int",
			"totalPointDesc": "string",
			"title": "string",
			"pointPrice": "int",
			"originalPrice": "double",
			"tags": "Pair[]",
			"totalPoint": "int"
	},
	"PointProductOrderResult":{
			"extraDesc": "string[]",
			"buttons": "Cell[]",
			"status": "int",
			"title": "string",
			"desc": "string",
			"coupons": "Coupon[]"
	},
	"MovieSuggestList":{
			"list": "MovieSuggest[]"
	},
	"MovieSearchResult":{
			"movieList": "MovieOnInfoList",
			"cinemaList": "CinemaList",
			"movieListTitle": "string",
			"cinemaListTitle": "string",
			"targetNotHitTitle": "string",
			"targetIsHit": "boolean"
	},
	"MovieSuggest":{
			"value": "string",
			"displayInfo": "string",
			"scope": "string",
			"url": "string"
	},
	"OrderTips":{
			"icon": "string",
			"text": "string"
	},
	"HBTReviewInfo":{
			"status": "int",
			"title": "string",
			"tip": "string"
	},
	"MOPayOperationBanner":{
			"picUrl": "string",
			"linkUrl": "string"
	},
	"CarProductService":{
			"promos": "string[]",
			"serviceType": "int",
			"action": "string",
			"priceDesc": "string",
			"price": "string",
			"name": "string"
	},
	"CarProductServiceBeanList":{
			"promoType": "int",
			"displayLimit": "int",
			"list": "CarProductService[]",
			"title": "string"
	},
	"CarProductServiceInfoList":{
			"list": "CarProductServiceBeanList[]"
	},
	"FitnessVenue":{
			"stockStatus": "string",
			"url": "string",
			"price": "string",
			"startTime": "string"
	},
	"FitnessCategoryVenue":{
			"name": "string",
			"fitnessVenues": "FitnessVenue[]"
	},
	"FitnessVenuesInfo":{
			"name": "string",
			"fitnessCategoryVenues": "FitnessCategoryVenue[]"
	},
	"HotelNaviItem":{
			"type": "int",
			"parentId": "int",
			"id": "int",
			"tag": "string",
			"subNaviItemList": "HotelNaviItem[]",
			"searchParams": "string",
			"name": "string"
	},
	"HotelUniRegionResult":{
			"naviItemList": "HotelNaviItem[]"
	},
	"BuffetRule":{
			"desc": "string[]",
			"title": "string"
	},
	"Buffet":{
			"title": "string",
			"buffetRules": "BuffetRule[]",
			"originPrice": "string",
			"discountPrice": "string",
			"count": "int",
			"statusDesc": "string",
			"status": "int",
			"couponId": "int"
	},
	"MOPayBuffetDo":{
			"buffets": "Buffet[]",
			"shopId": "string"
	},
	"MOPayBuffetOrderDo":{
			"urlScheme": "string",
			"message": "string",
			"code": "int"
	},
	"MOPayPreProcessDo":{
			"urlScheme": "string",
			"message": "string",
			"code": "int"
	},
	"OrderDetailTipsDo":{
			"richMessage": "string"
	},
	"Decal":{
			"groupId": "int",
			"name": "string",
			"bigUrl": "string",
			"smallUrl": "string",
			"id": "int"
	},
	"DecalGroup":{
			"groupName": "string",
			"decalList": "Decal[]",
			"groupId": "int"
	},
	"DecalCategory":{
			"categoryName": "string",
			"categoryId": "int"
	},
	"DecalsResult":{
			"list": "DecalGroup[]",
			"categoryList": "DecalCategory[]"
	},
	"TAConfirmOrderResult":{
			"discountFee": "string",
			"shopName": "string",
			"expectedArriveTime": "string",
			"cartFee": "string",
			"toastMsg": "string",
			"thirdpartyCouponInfo": "TAThirdpartyCoupon",
			"activityInfo": "TAConfirmOrderActivity",
			"curPayType": "int",
			"cartId": "string",
			"carrierName": "string",
			"curAmount": "double",
			"dishList": "TakeAwayOrderItem[]",
			"feeList": "TakeAwayOrderItem[]",
			"invoiceMinFee": "string",
			"invoiceSupported": "boolean",
			"productCode": "int",
			"canUseDPCoupon": "boolean",
			"shopPayType": "int"
	},
	"TAActivityInfo":{
			"type": "int",
			"title": "string",
			"activityList": "TAActivity[]"
	},
	"CompeteShop":{
			"regionName": "string",
			"regionId": "int",
			"cityName": "string",
			"cityId": "int",
			"districtName": "string",
			"districtId": "int",
			"shopTypeName": "string",
			"shopTypeId": "int",
			"categoryName": "string",
			"categoryId": "int",
			"coordType": "string",
			"lng": "double",
			"lat": "double",
			"shanhuiList": "Shanhui[]",
			"prodList": "TuanProd[]",
			"distance": "int",
			"phone": "string[]",
			"address": "string",
			"branchName": "string",
			"shopName": "string",
			"extShopId": "string",
			"srcName": "string"
	},
	"TAElemeCouponList":{
			"list": "TAElemeCoupon[]",
			"unavailableList": "TAElemeCoupon[]"
	},
	"TuanProd":{
			"dealId": "int",
			"limitedCutPrice": "double",
			"cutPrice": "double",
			"cutPriceForNew": "double",
			"dealNum": "int",
			"price": "double",
			"oldPrice": "double",
			"desc": "string",
			"title": "string"
	},
	"Status":{
			"errorInfo": "string",
			"success": "boolean"
	},
	"TAGetElemeCouponResult":{
			"needVerify": "boolean",
			"couponInfo": "TAElemeCouponList"
	},
	"TAElemeCoupon":{
			"promoCipher": "string",
			"title": "string",
			"expireDate": "string",
			"price": "string"
	},
	"DiscoveryItem":{
			"itemTitle": "string",
			"picList": "string[]",
			"type": "int"
	},
	"DiscoveryCategoryItem":{
			"categoryId": "int",
			"plazaTopicList": "PlazaTopic[]",
			"categoryName": "string"
	},
	"DiscoveryItemList":{
			"list": "DiscoveryItem[]"
	},
	"DiscoveryCategoryItemList":{
			"list": "DiscoveryCategoryItem[]"
	},
	"PointProductOrderCreation":{
			"productType": "int",
			"title": "string",
			"content": "string",
			"status": "int",
			"orderId": "int"
	},
	"DecalCategoryList":{
			"list": "DecalCategory[]"
	},
	"Shanhui":{
			"dealNum": "int",
			"desc": "string"
	},
	"SearchableItem":{
			"expirationDate": "time",
			"webpageURL": "string",
			"uniqueIdentifier": "string",
			"longitude": "double",
			"latitude": "double",
			"country": "string",
			"city": "string",
			"keywords": "string[]",
			"thumbnailURL": "string",
			"contentDescription": "string",
			"title": "string"
	},
	"PointMallDo":{
			"pointMallUrl": "string",
			"pointMessage": "string",
			"enable": "int"
	},
	"TuanHomeSearchResult":{
			"tagCells": "CellList",
			"searchHint": "string"
	},
	"QuarterNewGoods":{
			"price": "string",
			"goUrl": "string",
			"subTitle": "string",
			"mainTitle": "string",
			"picUrl": "string"
	},
	"QuarterNewGoodsList":{
			"goUrl": "string",
			"NewGoodses": "QuarterNewGoods[]",
			"count": "int",
			"title": "string"
	},
	"CategoryPair":{
			"name": "string",
			"uid": "int",
			"url": "string"
	},
	"BrandPoster":{
			"title": "string",
			"count": "int",
			"url": "string",
			"imageList": "MarketPosterImage[]",
			"category": "CategoryPair[]"
	},
	"TAConfirmOrderActivity":{
			"onlinePayActivity": "string",
			"defaultActivityProvider": "int",
			"activityInfoList": "TAActivityInfo[]",
			"activityTips": "string"
	},
	"TAThirdpartyCoupon":{
			"thirdpartyCouponType": "int",
			"thirdpartyCouponStr": "string",
			"title": "string",
			"canUseThirdpartyCode": "boolean",
			"thirdpartyCouponStatus": "int",
			"thirdpartyCouponReduce": "string"
	},
	"BeautyTableDo":{
			"amount": "string",
			"typeDesc": "string",
			"type": "string"
	},
	"OrderDeleteResultDo":{
			"message": "string",
			"code": "int"
	},
	"MenuCountItem":{
			"packageGroupInfo": "string",
			"count": "int",
			"dishId": "int"
	},
	"PromotionShop":{
			"feedback": "string",
			"hasPromos": "boolean",
			"bookable": "boolean",
			"hasDeals": "boolean",
			"categoryName": "string",
			"regionName": "string",
			"score": "int",
			"cityId": "int",
			"shopId": "int",
			"imgUrl": "string",
			"clickUrl": "string",
			"shopName": "string"
	},
	"MallViewList":{
			"mall": "ViewItem"
	},
	"PromotionShopList":{
			"list": "PromotionShop[]"
	},
	"RealcomConfig":{
			"meiTuanChatSwitch": "boolean",
			"pollingInterval": "string",
			"redirectLink": "string",
			"messageCount": "int",
			"visible": "int"
	},
	"BuyTicketButton":{
			"toastText": "string",
			"buttonText": "string",
			"movieShowStatus": "int"
	},
	"SeatRowName":{
			"name": "string",
			"rowIndex": "int"
	},
	"TileEntity":{
			"title": "string",
			"bigIcon": "string",
			"icon": "string"
	},
	"HBTGroupOnDishDo":{
			"dishShopList": "HBTPair[]",
			"dishSubTitle": "string[]",
			"dishTitle": "string",
			"dishType": "int",
			"dishExtraInfoSchema": "string",
			"dishExtraInfo": "HBTPair",
			"dishAddButtonSubTitle": "string",
			"dishAddButtonTitle": "string",
			"dishImageUrl": "string[]"
	},
	"HBTGroupOnInfo":{
			"groupOnOrderId": "int",
			"groupOnDealId": "int",
			"invalidGroupOnReceipts": "HBTGroupOnReceiptDo[]",
			"usedGroupOnReceipts": "HBTGroupOnReceiptDo[]",
			"unusedGroupOnReceipts": "HBTGroupOnReceiptDo[]",
			"schema": "string",
			"groupOnName": "string"
	},
	"QuickPayBankElement":{
			"payEvent": "PayEvent",
			"payQuota": "PayQuota",
			"uid": "string",
			"cardType": "int",
			"iconUrl": "string",
			"tailNumber": "string",
			"bankName": "string"
	},
	"UserBanklistResult":{
			"hasPass": "boolean",
			"quickPayBankElement": "QuickPayBankElement[]"
	},
	"BankUnbindResult":{
			"resultTitle": "string",
			"paySessionID": "string",
			"payErrorCode": "int",
			"resultMsg": "string",
			"resultCode": "int"
	},
	"VerifyUserInfoResult":{
			"resultTitle": "string",
			"paySessionID": "string",
			"resultCode": "int",
			"verifyAccountID": "string",
			"payErrorCode": "int",
			"resultMsg": "string"
	},
	"ResetVerifyResult":{
			"resultTitle": "string",
			"paySessionID": "string",
			"payErrorCode": "int",
			"resultMsg": "string",
			"resultCode": "int"
	},
	"BindQuickPayResult":{
			"resultTitle": "string",
			"resultCode": "int",
			"payErrorCode": "int",
			"resultMsg": "string",
			"paySessionID": "string",
			"quickPayContractID": "string"
	},
	"SetPasswordResult":{
			"resultTitle": "string",
			"paySessionID": "string",
			"payErrorCode": "int",
			"resultMsg": "string",
			"resultCode": "int"
	},
	"SendSMSResult":{
			"paySessionID": "string"
	},
	"VerifySMSResult":{
			"paySessionID": "string",
			"resultCode": "int"
	},
	"VerifyPasswordResult":{
			"resultTitle": "string",
			"paySessionID": "string",
			"payErrorCode": "int",
			"resultMsg": "string",
			"resultCode": "int"
	},
	"DiscountConditionDo":{
			"label": "string",
			"desc": "string[]",
			"title": "string"
	},
	"HBTGroupOnReceiptDo":{
			"barCode": "string",
			"validDate": "string",
			"useDate": "string",
			"status": "int"
	},
	"RightDo":{
			"shareTarget": "int[]",
			"shareDo": "ShareDo",
			"url": "string",
			"richDesc": "string",
			"tagType": "int"
	},
	"IsHaveFullQuickPayInfoResult":{
			"resultTitle": "string",
			"payErrorCode": "int",
			"resultMsg": "string",
			"resultCode": "int",
			"paySessionID": "string"
	},
	"BaikeInfo":{
			"content": "string",
			"title": "string",
			"extShopId": "string",
			"srcName": "string"
	},
	"ShopSpecFeature":{
			"feature": "string[]",
			"type": "string"
	},
	"ExtShopType":{
			"shopTypeName": "string",
			"shopTypeId": "int",
			"cityId": "int"
	},
	"ExtRegion":{
			"regionName": "string",
			"regionId": "int",
			"cityId": "int"
	},
	"PayQuota":{
			"oneDealQuota": "string",
			"dayQuota": "string"
	},
	"PayEvent":{
			"eventTitle": "string",
			"eventLimitAmount": "double",
			"eventDiscountAmount": "double",
			"eventUrl": "string"
	},
	"SearchFilterItem":{
			"desc": "string",
			"selected": "boolean",
			"type": "int",
			"name": "string",
			"uid": "string"
	},
	"SearchFilterGroup":{
			"label": "string",
			"itemType": "int",
			"items": "SearchFilterItem[]",
			"multiSelectable": "boolean",
			"name": "string"
	},
	"FilterNavi":{
			"filterGroups": "SearchFilterGroup[]"
	},
	"ExtConditionItem":{
			"conditionItemValue": "string",
			"conditionItemName": "string",
			"conditionItemId": "int"
	},
	"ExtCondition":{
			"conditionValue": "string",
			"conditionName": "string",
			"conditionId": "int",
			"conditionItemIndex": "int",
			"conditionItemList": "ExtConditionItem[]"
	},
	"ExtGameInfo":{
			"payfee": "string",
			"publishTime": "string",
			"webSite": "string",
			"topic": "string",
			"developer": "string",
			"mode": "string",
			"content": "string",
			"gameType": "string",
			"platform": "string",
			"gameStar": "int",
			"gameName": "string",
			"extGameId": "string",
			"srcName": "string"
	},
	"DirectZoneExtraInfo":{
			"feedback": "string",
			"score": "string",
			"price": "string"
	},
	"WeddingSelectiveShopInfo":{
			"defaultLink": "string",
			"bookingDescription": "string",
			"properties": "Pair[]",
			"title": "string"
	},
	"PromosDo":{
			"richDesc": "string",
			"status": "int",
			"statusDesc": "string",
			"isShow": "boolean",
			"promoDesc": "string",
			"title": "string"
	},
	"PromosTag":{
			"name": "string"
	},
	"MOPayPromosInfoDo":{
			"uniCashierUrl": "string",
			"tags": "PromosTag[]",
			"promos": "PromosDo[]",
			"orderNumDesc": "string",
			"title": "string"
	},
	"CinemaMovieShowExpress":{
			"hasMoreShow": "boolean",
			"dateText": "string",
			"movieShowList": "MovieShow[]",
			"cinemaId": "int"
	},
	"CinemaMovieShowExpressList":{
			"list": "CinemaMovieShowExpress[]"
	},
	"DealStyle":{
			"moduleKey": "string"
	},
	"PointVoucher":{
			"productGroupId": "int",
			"productType": "int",
			"title": "string",
			"desc": "string",
			"pointPrice": "int",
			"voucherPrice": "double",
			"pic": "string",
			"exchangedNum": "int"
	},
	"DynamicMovie":{
			"favText": "string",
			"goToMovieDetail": "boolean",
			"minPrice": "string",
			"showCountRemained": "int",
			"cinemaCountRemained": "int",
			"postFlag": "int",
			"info": "string",
			"hasMovieShow": "boolean"
	},
	"DynamicMovieList":{
			"list": "DynamicMovie[]"
	},
	"WeddingToHomePhoto":{
			"picHeight": "int",
			"picWidth": "int",
			"picPath": "string",
			"picLink": "string",
			"unitPrice": "string"
	},
	"WeddingToHomePhotoList":{
			"toHomePhotoDoList": "WeddingToHomePhoto[]",
			"titleLink": "string",
			"titleDesc": "string",
			"titlePrmo": "string",
			"title": "string"
	},
	"SendBankSMSResult":{
			"resultMsg": "string",
			"resultTitle": "string",
			"resultCode": "int",
			"payErrorCode": "int",
			"paySessionID": "string"
	},
	"OrderVoucherList":{
			"voucherList": "Cell[]"
	},
	"TaPopUp":{
			"popUpContent": "string",
			"popUpTitle": "string",
			"popUpUrl": "string"
	},
	"BlackUser":{
			"avatar": "string",
			"nick": "string",
			"userId": "int"
	},
	"UgcActionInfo":{
			"coverStatus": "string",
			"name": "string",
			"status": "int",
			"notice": "string",
			"type": "int"
	},
	"ShopUgcInfo":{
			"praiseShopStatus": "boolean",
			"userList": "PlazaUser[]",
			"count": "int",
			"actionList": "UgcActionInfo[]"
	},
	"ProfileUser":{
			"userInfo": "string",
			"isBeBlacked": "boolean",
			"followsUrl": "string",
			"fansUrl": "string",
			"isBlack": "boolean",
			"isFans": "boolean",
			"feedTypeList": "Pair[]",
			"fansCount": "int",
			"followsCount": "int"
	},
	"AddCheckinResult":{
			"noticeTitle": "string",
			"retCode": "int",
			"redirectText": "string",
			"redirectURL": "string",
			"bonusList": "CheckinBonus[]",
			"notice": "string",
			"level": "LevelLabel",
			"content": "string[]",
			"status": "int"
	},
	"UgcShortFeed":{
			"detailURL": "string",
			"feedCount": "int",
			"feedLabel": "string",
			"user": "PlazaUser",
			"content": "string",
			"addTime": "string",
			"mainId": "string",
			"feedtype": "int"
	},
	"ShortFeedList":{
			"list": "UgcShortFeed[]"
	},
	"NcpmAd":{
			"imgUrl": "string",
			"feedback": "string",
			"monitorClickUrl": "string",
			"monitorImpUrl": "string",
			"imageUrl": "string",
			"clickUrl": "string",
			"targetID": "int",
			"price": "int",
			"launchID": "int"
	},
	"AppNcpmBean":{
			"ncpmAdList": "NcpmAd[]"
	},
	"FitnessTimesCard":{
			"promoList": "string[]",
			"linkUrl": "string",
			"timeRange": "string",
			"originPrice": "string",
			"price": "string",
			"title": "string",
			"picUrl": "string"
	},
	"WeddingTuanGou":{
			"count": "int",
			"discountDesc": "string",
			"tuanGouId": "string",
			"salesDesc": "string",
			"originalPrice": "double",
			"price": "double",
			"contentTitle": "string",
			"photo": "string"
	},
	"WeddingTuanGouList":{
			"isEnd": "boolean",
			"picHeight": "int",
			"picWidth": "int",
			"overdueAutoRefund": "boolean",
			"isAutoRefund": "boolean",
			"hrefContent": "string",
			"hasHrefFlag": "boolean",
			"rectangleOrSquareFlag": "boolean",
			"list": "WeddingTuanGou[]"
	},
	"FitnessTimesCardList":{
			"list": "FitnessTimesCard[]"
	},
	"LevelLabel":{
			"bonus": "int",
			"percent": "double",
			"score": "int",
			"toLevel": "string",
			"level": "string"
	},
	"HotelRankList":{
			"titleTag": "string",
			"url": "string",
			"title": "string"
	},
	"UserGrade":{
			"level": "int",
			"desc": "string",
			"image": "string",
			"url": "string"
	},
	"ConsultUrlDo":{
			"consultUrl": "string"
	},
	"MovieOrderBonus":{
			"shareImgUrl": "string",
			"shareUrl": "string",
			"shareDesc": "string",
			"shareTitle": "string",
			"subTitle": "string",
			"title": "string"
	},
	"HotelBuyConfig":{
			"buyUrl": "string",
			"buttonText": "string",
			"buttonEnabled": "boolean"
	},
	"HotelProduct":{
			"isHotelBookable": "boolean",
			"moduleSort": "string[]",
			"defaultPicUrl": "string",
			"deal": "Deal",
			"hotelPackageList": "HotelPackage[]",
			"moreDetailUrl": "string",
			"originUrl": "string",
			"buyConfig": "HotelBuyConfig",
			"picUrlList": "string[]",
			"serviceLabelList": "LinkDo[]",
			"eventList": "Event[]",
			"saleCountDesc": "string",
			"marketPrice": "double",
			"price": "double",
			"subtitle": "string",
			"title": "string",
			"bizType": "int",
			"productId": "int"
	},
	"SceneModeItem":{
			"brandPicUrls": "string[]",
			"tagId": "string",
			"extInfo": "SceneExtItem",
			"shopPower": "int",
			"timeInfo": "string",
			"bizID": "string",
			"detailInfoSchema": "string",
			"picUrl": "string",
			"tagType": "int",
			"subTitle": "string[]",
			"mainTitle": "string"
	},
	"SceneModeItemList":{
			"headLine": "NearbyHeadLine",
			"sceneHeaderList": "SceneModeIHeader[]",
			"headlineList": "HomeClickUnit[]",
			"list": "SceneModeItem[]"
	},
	"HotelBestShopResult":{
			"otherShopList": "Shop[]",
			"restaurantList": "Shop[]",
			"scenicList": "Shop[]",
			"hotelList": "Shop[]",
			"bestShop": "Shop",
			"style": "int"
	},
	"HotelPackage":{
			"saleCountDesc": "string",
			"redirectUrl": "string",
			"event": "string",
			"packagePrice": "double",
			"packageTitle": "string",
			"productId": "int",
			"packageId": "int"
	},
	"ShopExtraInfo":{
			"shopExtraInfosTitle": "string",
			"shopExtraInfos": "Attribute[]"
	},
	"HotelProductDetailResult":{
			"bookingProcessUrl": "string",
			"hotelProductDetail": "HotelProductDetail",
			"bookingInfoList": "HotelDealGroupBookingInfo[]",
			"interested": "boolean",
			"reviewListUrl": "string",
			"structuredDetailCss": "string",
			"structuredDetailList": "Pair[]",
			"recommendReasonStyle": "int",
			"recommendReasonList": "string[]",
			"shortRecommendReason": "string",
			"reviewCountDesc": "string",
			"reviewRatio": "string",
			"bizType": "int",
			"productId": "int"
	},
	"HBTTableCodeDo":{
			"tablecode": "string"
	},
	"ApplePayResult":{
			"flag": "int",
			"alertMsg": "AlertMsg",
			"errorcode": "string",
			"message": "string",
			"orderid": "int",
			"content": "string"
	},
	"TaEntrance":{
			"index": "int",
			"url": "string",
			"icon": "string",
			"name": "string"
	},
	"TaNearbyShopList":{
			"multiFilters": "TaMultiFilter",
			"mtWmPoiId": "int",
			"address": "string",
			"multiCategoryNavs": "Category[]",
			"currentMultiCategory": "Category",
			"wMLng": "double",
			"wMLat": "double",
			"currentSort": "Pair",
			"sortNavs": "Pair[]",
			"multiFilterNavs": "TAPair[]",
			"currentMultiFilterIds": "string",
			"list": "TakeAwayShop[]"
	},
	"KTVShopRoomWidget":{
			"subTitle": "string",
			"widgetName": "string",
			"uRL": "string",
			"showable": "boolean"
	},
	"RecommendDishDTO":{
			"desc": "string",
			"picUrl": "string",
			"name": "string",
			"dishId": "int"
	},
	"MenuOrder":{
			"schemaUrl": "string",
			"resButtonName": "string"
	},
	"ResponseMsg":{
			"message": "string"
	},
	"TaLicencePic":{
			"largePicUrl": "string",
			"smallPicUrl": "string"
	},
	"OrderDishRoomInfo":{
			"roomId": "int",
			"message": "string",
			"status": "int",
			"isOwner": "int",
			"interval": "int",
			"peopleNum": "int",
			"password": "string",
			"roomName": "string"
	},
	"MTDeal":{
			"dealID": "string",
			"isNeedLogin": "boolean",
			"salesDesc": "string",
			"originaPirce": "double",
			"price": "double",
			"pic": "string",
			"title": "string",
			"url": "string"
	},
	"MTDealList":{
			"title": "string",
			"deals": "MTDeal[]"
	},
	"CartMenuItem":{
			"count": "int",
			"menuItem": "MenuItem"
	},
	"MeiTuanOrderListTab":{
			"redirectUrl": "string"
	},
	"RecommendMenuListDo":{
			"type": "int",
			"menus": "MenuItem[]",
			"desc": "string",
			"tabTitle": "string"
	},
	"RecommendMenuDTO":{
			"shopId": "int",
			"ifLastPage": "boolean",
			"shopName": "string",
			"recommendDishs": "RecommendDishDTO[]"
	},
	"MovieTrailerList":{
			"list": "MovieTrailer[]"
	},
	"HBTEntryInfoDo":{
			"hasEntry": "boolean",
			"reserves": "HBTPair[]",
			"schemaUrl": "string",
			"rightTitleColor": "string",
			"leftTitleText": "string",
			"rightTitleText": "string"
	},
	"RebindWxNoPwdResult":{
			"wxNoPwdBindUrl": "string"
	},
	"NoPwdPayMethod":{
			"payMethodInfo": "string",
			"iconUrl": "string",
			"paymentTool": "string",
			"paymethodDescription": "string",
			"contractId": "string",
			"payMethodName": "string"
	},
	"RichCellList":{
			"moduleGroups": "ModuleGroup[]",
			"cellLists": "CellList[]",
			"richTitle": "RichTitle"
	},
	"RichViewList":{
			"richTitle": "RichTitle"
	},
	"PointTopic":{
			"productName": "string",
			"subjectPic": "string",
			"pointPrice": "int",
			"productType": "int",
			"productGroupId": "int"
	},
	"PointAdvertise":{
			"advertisePicURL": "string",
			"advertisePic": "string"
	},
	"TopicViewLists":{
			"viewLists": "RichViewList[]"
	},
	"IsBindWxNoPwdResult":{
			"resultMsg": "string",
			"resultTitle": "string",
			"resultCode": "int",
			"wxNoPwdBindUrl": "string"
	},
	"BeautyServiceItemVo":{
			"step": "int",
			"type": "string",
			"times": "string"
	},
	"BeautyTableRowVo":{
			"iconName": "string",
			"num": "int",
			"type": "string",
			"desc": "string",
			"amount": "double"
	},
	"BeautyTableVo":{
			"richText": "string",
			"gap": "string",
			"title": "string",
			"totalePrice": "double",
			"tuanPrice": "double",
			"requiredGroups": "BeautyTableRowVo[]",
			"optionGroups": "BeautyTableRowVo[]"
	},
	"GuideKeywordResult":{
			"type": "int",
			"list": "ShopDisplayTag[]"
	},
	"MovieCast":{
			"url": "string",
			"portraitUrl": "string",
			"roleDesc": "string",
			"name": "string",
			"uid": "int"
	},
	"WeddingRecommend":{
			"isDisplayable": "boolean",
			"iconUrl": "string",
			"redirectUrl": "string",
			"title": "string"
	},
	"ExpertItem":{
			"event": "EventInfo[]",
			"picUrl": "string",
			"url": "string",
			"price": "string",
			"count": "string",
			"pics": "string[]",
			"uid": "int",
			"icon": "string",
			"title": "string",
			"subTitle": "string",
			"expertType": "int"
	},
	"ExpertCategory":{
			"highlight": "boolean",
			"parentID": "int",
			"name": "string",
			"uid": "int"
	},
	"RichTitle":{
			"type": "int",
			"link": "string",
			"icon": "string",
			"subTitle": "string",
			"title": "string"
	},
	"HBTQuFloatInfoDo":{
			"reserves": "HBTPair[]",
			"content": "string"
	},
	"OrderBonus":{
			"imgUrl": "string",
			"title": "string",
			"desc": "string",
			"share": "Share"
	},
	"HotSuggestResult":{
			"list": "SuggestGroup[]",
			"title": "string"
	},
	"SuggestGroup":{
			"suggestList": "Suggest[]",
			"icon": "string"
	},
	"BrandIntro":{
			"pictures": "string[]",
			"introduction": "string",
			"tags": "string[]",
			"name": "string",
			"logo": "string",
			"title": "string"
	},
	"BrandDealTitleInfo":{
			"viewCount": "int",
			"tag": "string"
	},
	"SingleDishMenuEntrance":{
			"type": "int",
			"schema": "string",
			"title": "string"
	},
	"DishMenuEntrance":{
			"dishMenuEntranceList": "SingleDishMenuEntrance[]",
			"show": "int"
	},
	"ShopConcern":{
			"displayDesc": "string",
			"displayTitle": "string",
			"isChecked": "int",
			"isNeedShow": "int",
			"concernType": "int"
	},
	"CouponInfo":{
			"deadline": "string",
			"vdate": "string",
			"link": "string",
			"type": "int",
			"context": "string",
			"money": "string",
			"desc": "string",
			"topic": "string",
			"id": "string"
	},
	"GainCouponResult":{
			"error": "string",
			"deadline": "string",
			"rule": "string",
			"title": "string",
			"result": "int"
	},
	"GetCouponInfoResult":{
			"couponInfos": "CouponInfo[]"
	},
	"DealProductInfoItem":{
			"desc": "string",
			"url": "string"
	},
	"DealProductInfo":{
			"title": "string",
			"dataList": "DealProductInfoItem[]"
	},
	"DealKnowledge":{
			"url": "string",
			"title": "string",
			"content": "string"
	},
	"HotelProductDetail":{
			"tips": "string[]",
			"refundNoticeList": "string[]",
			"useFlow": "string[]",
			"notice": "string",
			"ruleReminderList": "string[]",
			"validityList": "string[]",
			"reservationNumberList": "string[]",
			"verifyShopName": "string",
			"reservationDetail": "string"
	},
	"ConsultInfo":{
			"isCanConsult": "boolean",
			"iconUrl": "string",
			"jumpUrl": "string",
			"title": "string"
	},
	"HosptialToplistInfo":{
			"isShow": "boolean",
			"title": "string",
			"toplistInfo": "string",
			"jumpUrl": "string"
	},
	"BeautyShopProvidesVo":{
			"name": "string",
			"iconName": "string"
	},
	"BeautyShopCaseInfo":{
			"url": "string",
			"link": "string",
			"title": "string",
			"price": "string",
			"picWidth": "int",
			"picHeight": "int",
			"defaultPic": "string",
			"postId": "int"
	},
	"BeautyOfficalType":{
			"type": "int",
			"name": "string",
			"officalTypeId": "int"
	},
	"BeautyCaseResult":{
			"picWidth": "int",
			"picHeight": "int",
			"list": "BeautyShopCaseInfo[]",
			"officalTypeList": "BeautyOfficalType[]",
			"topNav": "BeautyNavTab[]",
			"nextStartIndex": "int",
			"isEnd": "boolean",
			"startIndex": "int"
	},
	"BoxOfficeRankInfo":{
			"link": "string",
			"rankNum": "int",
			"rankTypeDesc": "string"
	},
	"BeautyNavTab":{
			"type": "int",
			"name": "string",
			"id": "string"
	},
	"ExpertSearchResult":{
			"suggestList": "ExpertItem[]",
			"category": "ExpertCategory[]",
			"list": "ExpertItem[]"
	},
	"ExpertServiceDetail":{
			"expertInfo": "ExpertInfo",
			"serviceInfo": "ExpertServiceInfo",
			"otherServices": "ExpertServicesResult"
	},
	"ExpertServiceItem":{
			"event": "EventInfo[]",
			"url": "string",
			"price": "string",
			"subTitle": "string",
			"title": "string",
			"uid": "int"
	},
	"ExpertServicesResult":{
			"list": "ExpertServiceItem[]"
	},
	"HomeSpecialContentSection":{
			"multiContent": "HomeClickUnit[]",
			"sepcialContent": "HomeClickUnit"
	},
	"ExpertClassNavItem":{
			"icon": "string",
			"schema": "string",
			"categoryid": "int",
			"backgroundPic": "string",
			"subtitle": "string",
			"title": "string"
	},
	"ExpertHomeResult":{
			"classItemList": "ExpertClassNavItem[]",
			"bannerItemList": "Banner[]"
	},
	"FeedbackCategory":{
			"subCategoryList": "FeedbackCategory[]",
			"name": "string",
			"uid": "int"
	},
	"ExpertHomeRecom":{
			"list": "ExpertItem[]"
	},
	"FeedPoi":{
			"shopId": "int",
			"jumpUrl": "string",
			"distance": "string",
			"region": "string[]",
			"picture": "string",
			"price": "string",
			"name": "string"
	},
	"FeedUser":{
			"profileUrl": "string",
			"userTags": "string[]",
			"userLevel": "string",
			"userId": "int",
			"source": "string",
			"avatar": "string",
			"userName": "string"
	},
	"FeedPic":{
			"bigUrl": "string",
			"smallUrl": "string"
	},
	"FitnessShopLeaderBoard":{
			"actionUrl": "string",
			"subTitle": "string",
			"title": "string",
			"iconUrl": "string"
	},
	"FeedComment":{
			"noteType": "int",
			"commentTime": "string",
			"content": "string",
			"noteId": "int",
			"toUser": "FeedUser",
			"fromUser": "FeedUser"
	},
	"FeedDetail":{
			"anonymous": "boolean",
			"share": "ShareDo",
			"recommendInfoList": "RecommendInfo[]",
			"reportUrl": "string",
			"viewCount": "int",
			"shareUrl": "string",
			"shareTips": "string",
			"actionNote": "string",
			"feedRecommend": "FeedRecommend",
			"sourceUrl": "string",
			"sourceName": "string",
			"reviewCount": "int",
			"price": "string",
			"abstractList": "string[]",
			"scoreText": "string",
			"translateContent": "string",
			"recommends": "string[]",
			"comments": "FeedComment[]",
			"likeUsers": "FeedUser[]",
			"time": "string",
			"commentCount": "int",
			"likeCount": "int",
			"isLike": "boolean",
			"detailUrl": "string",
			"editUrl": "string",
			"reviewType": "int",
			"feedType": "int",
			"mainId": "string",
			"honour": "string",
			"star": "int",
			"content": "string",
			"pictures": "FeedPic[]",
			"feedPoi": "FeedPoi",
			"feedUser": "FeedUser"
	},
	"FitnessShopPriceInfo":{
			"iconUrl": "string",
			"title": "string",
			"subTitle": "string",
			"actionUrl": "string"
	},
	"FeedDetailList":{
			"feedTip": "string",
			"buttonText": "string",
			"list": "FeedDetail[]"
	},
	"ReviewFeedList":{
			"enableSearch": "boolean",
			"titleList": "string[]",
			"extraListTitle": "string",
			"reviewFilterNavs": "ReviewFilter[]",
			"reviewAbstractList": "ReviewAbstract[]",
			"ownerReview": "FeedDetail",
			"friendReviewList": "FeedDetail[]",
			"list": "FeedDetail[]"
	},
	"PayShowClubGiftDo":{
			"reachAmount": "string",
			"showStatus": "boolean",
			"subTitle": "string",
			"title": "string"
	},
	"ShopReviewFeedList":{
			"bottomTitle": "string",
			"topTitle": "string",
			"notice": "string",
			"reviewAbstractList": "ReviewAbstract[]",
			"list": "FeedDetail[]"
	},
	"ExpertInfo":{
			"expertUrl": "string",
			"certificates": "string[]",
			"expertName": "string",
			"age": "string",
			"icon": "string",
			"expertID": "int",
			"expertTitle": "string"
	},
	"ExpertServiceInfo":{
			"serviceType": "string",
			"serviceTime": "string",
			"event": "EventInfo[]",
			"serviceRange": "string",
			"images": "string[]",
			"introduction": "string",
			"uid": "int",
			"serviceTitle": "string",
			"thumbnails": "string[]",
			"orderCount": "string",
			"price": "string",
			"orderUrl": "string"
	},
	"CreateFeedbackSuccessMsg":{
			"content": "string",
			"isSuccessful": "boolean"
	},
	"ExpertOrderDetail":{
			"statesTexts": "string[]",
			"state": "int",
			"expertInfo": "ExpertInfo",
			"showSecretary": "boolean",
			"buttonHint": "string",
			"headerIconType": "int",
			"orderBasicInfo": "Pair[]",
			"headerBgColor": "string",
			"buttonSchema": "string",
			"buttonTitle": "string",
			"buttonStyle": "int",
			"secretaryUrl": "string",
			"chatUrl": "string",
			"orderKey": "long",
			"headerSubInfo": "string",
			"headerMainInfo": "string"
	},
	"QueueResult":{
			"url": "string",
			"btnTxt": "string",
			"type": "int",
			"tipText": "string",
			"show": "boolean"
	},
	"SimpleOrderDish":{
			"spuAttrIds": "string[]",
			"skuId": "long",
			"spuId": "long",
			"count": "int",
			"name": "string",
			"dishId": "int"
	},
	"ExpertCreateOrder":{
			"submitStatus": "string",
			"summary": "string",
			"eventType": "int",
			"isCountChange": "int",
			"expertAddress": "string",
			"unavailableDays": "time[]",
			"maxCount": "int",
			"minCount": "int",
			"orderKey": "long",
			"servicePrice": "double",
			"serviceTitle": "string",
			"phoneNumber": "string",
			"remark": "string",
			"serviceAddress": "string",
			"serviceStyle": "Pair[]",
			"serviceTime": "time",
			"totalPrice": "double",
			"count": "int"
	},
	"FeedRecommend":{
			"state": "int",
			"source": "string",
			"jumpUrl": "string",
			"feedIcon": "string",
			"title": "string",
			"content": "string",
			"userAvatar": "string",
			"userIcon": "string",
			"userName": "string",
			"rankTitle": "string",
			"buttonTitle": "string"
	},
	"RedAlertExt":{
			"userPicList": "string[]",
			"unReadCount": "string"
	},
	"MovieSeatIcon":{
			"imageUrl": "string"
	},
	"MovieSeatIconList":{
			"list": "MovieSeatIcon[]"
	},
	"SceneExtItem":{
			"mainTitle": "string",
			"detailInfoSchema": "string"
	},
	"MovieScreenPhotoList":{
			"list": "MovieScreenPhoto[]"
	},
	"PreviewMyCommentResult":{
			"picMaxCount": "int",
			"contentMaxLength": "int",
			"contentMinLength": "int",
			"myComment": "MovieComment"
	},
	"MovieCommentReply":{
			"mineReply": "boolean",
			"referReply": "MovieCommentReply",
			"replyId": "int",
			"commentId": "int",
			"user": "MovieUser",
			"replyContent": "string",
			"addTime": "string",
			"referReplyId": "int"
	},
	"MovieCommentReplyList":{
			"list": "MovieCommentReply[]"
	},
	"HotelCreateOrderResult":{
			"payUrl": "string"
	},
	"AirportShopGroup":{
			"count": "int",
			"actionUrl": "string",
			"icon": "string",
			"categoryId": "int",
			"name": "string"
	},
	"SimpleUserProfile":{
			"avatar": "string",
			"nickName": "string",
			"userID": "int"
	},
	"AirportShopGroupList":{
			"list": "AirportShopGroup[]",
			"moreTxt": "string",
			"name": "string",
			"moreUrl": "string"
	},
	"HotelGoodsOrderResult":{
			"agentStr": "string",
			"confirmAndCancel": "string",
			"surName": "string",
			"userName": "string",
			"domesticShop": "boolean",
			"promoteVoucherList": "PromoteDetail[]",
			"promoteRewardList": "PromoteDetail[]",
			"promoteReduceList": "PromoteDetail[]",
			"buyTipList": "BuyTip[]",
			"roomCountMin": "int",
			"oTAID": "int",
			"roomCountMax": "int",
			"promoList": "Event[]",
			"arriveTimeList": "HotelArriveTime[]",
			"userPhone": "string",
			"cancelTimeHighlight": "string",
			"cancelTimeDesc": "string",
			"needID": "boolean",
			"datePriceList": "HotelDatePrice[]",
			"orderDesc": "string[]",
			"orderTitle": "string"
	},
	"HotelGoods":{
			"bookingRules": "string[]",
			"useRules": "string[]",
			"giftList": "Event[]",
			"confirmInfo": "string",
			"subtitle2": "string",
			"aggrSubtitle": "string",
			"confirmRule": "string",
			"supplier": "string",
			"goodsType": "string",
			"breakfast": "string",
			"oTAID": "int",
			"inventoryMin": "int",
			"promoList": "Event[]",
			"rPList": "Event[]",
			"buyTextLong": "string",
			"buyTextShort": "string",
			"buyUrl": "string",
			"tag": "string",
			"roomAttrList": "HotelRoomAttr[]",
			"subtitle": "string",
			"title": "string",
			"avgPrice": "int",
			"refundDesc": "string",
			"imageList": "string[]",
			"goodsSource": "int",
			"goodsId": "string"
	},
	"WorthBanner":{
			"deal": "Deal",
			"rank": "WorthRank",
			"topic": "WorthTopic",
			"type": "int",
			"link": "string",
			"detail": "string",
			"picUrl": "string",
			"subTitle": "string",
			"title": "string"
	},
	"WorthTopic":{
			"link": "string",
			"detail": "string",
			"picUrl": "string",
			"subTitle": "string",
			"title": "string"
	},
	"AirportNearbyHotelInfo":{
			"actionUrl": "string",
			"minPrice": "double",
			"count": "int"
	},
	"WorthDealList":{
			"list": "WorthBanner[]"
	},
	"ExpertOrder":{
			"serviceType": "string",
			"buttonUrl": "string",
			"buttonText": "string",
			"subTitle1": "string",
			"subTitle2": "string",
			"title": "string",
			"pic": "string",
			"statusBgColor": "string",
			"statusText": "string",
			"orderId": "string"
	},
	"ExpertOrderList":{
			"list": "ExpertOrder[]"
	},
	"WorthRank":{
			"link": "string",
			"detail": "string",
			"picUrl": "string",
			"subTitle": "string",
			"title": "string",
			"itemList": "WorthRankItem[]",
			"type": "int"
	},
	"WorthRankItem":{
			"score": "double",
			"originalPrice": "double",
			"detail": "string",
			"link": "string",
			"lng": "double",
			"lat": "double",
			"picUrl": "string",
			"price": "double",
			"subTitle": "string",
			"title": "string"
	},
	"WorthBannerList":{
			"list": "WorthBanner[]"
	},
	"HotelGoodsListResult":{
			"aggregated": "boolean",
			"roomList": "HotelRoom[]",
			"goodsList": "HotelGoods[]",
			"showNum": "int"
	},
	"HotelRoomAttr":{
			"value": "string",
			"name": "string"
	},
	"NewMenuEvent":{
			"upperLimit": "int",
			"freeCount": "int",
			"buyCount": "int",
			"type": "int",
			"eventDesc": "string",
			"menuGift": "MenuGift"
	},
	"NewMenuItem":{
			"packagePrice": "string",
			"unit": "string",
			"menuEvent": "NewMenuEvent",
			"soldOut": "boolean",
			"validity": "boolean",
			"dishSet": "NewSingleDish[]",
			"dishType": "int",
			"saleTime": "string",
			"genusType": "int",
			"dishTaste": "string",
			"isDishLiked": "boolean",
			"recomCount": "int",
			"tags": "string[]",
			"dishSales": "string",
			"currentPrice": "string",
			"originPrice": "string",
			"picUrl": "string",
			"name": "string",
			"dishId": "int"
	},
	"MenuSet":{
			"NewMenuItem": "NewMenuItem[]",
			"name": "string"
	},
	"FriendShopReviewCountDo":{
			"msgInfo": "string",
			"friendType": "int",
			"bindGuideUrl": "string",
			"bindGuideAlert": "string",
			"buttonAlert": "string"
	},
	"RedEnvelopeAdvertise":{
			"redirectUrl": "string",
			"imageUrl": "string"
	},
	"CheckinBonus":{
			"step": "int",
			"gotten": "boolean",
			"type": "string",
			"valueText": "string",
			"pic": "string",
			"desc": "string[]",
			"title": "string",
			"stepCount": "int"
	},
	"NewCartMenuItem":{
			"count": "int",
			"menuItem": "NewMenuItem"
	},
	"CarTestDriveBookProduct":{
			"id": "int",
			"name": "string",
			"promo": "string"
	},
	"CarTestDriveBook":{
			"actionTitle": "string",
			"userPhone": "string",
			"productList": "CarTestDriveBookProduct[]",
			"shopPhone": "string[]",
			"title": "string"
	},
	"CarTestDriveBookAction":{
			"actionUrl": "string"
	},
	"AirportTransportationInfo":{
			"actionUrl": "string",
			"subTitle": "string",
			"icon": "string",
			"title": "string"
	},
	"GenPayOrderResult":{
			"needRedirect": "boolean",
			"tradeNo": "string",
			"payToken": "string"
	},
	"NewSingleDish":{
			"dishId": "int",
			"count": "int",
			"groupName": "string"
	},
	"HotelDatePrice":{
			"price": "int",
			"date": "string"
	},
	"HotelArriveTime":{
			"arriveTimeDesc": "string",
			"arriveTime": "string"
	},
	"EduVideoTipInfo":{
			"videoTipTitle": "string",
			"videoPageUrl": "string",
			"videoCountText": "string"
	},
	"HomeDesignProductFilter":{
			"filterValues": "HomeDesignProductFilterValue[]",
			"filterName": "string"
	},
	"HomeDesignProduct":{
			"url": "string",
			"price": "string",
			"area": "string",
			"huxing": "string",
			"coverImage": "string",
			"styleName": "string",
			"productName": "string",
			"productId": "int"
	},
	"HomeDesignProductListResult":{
			"url": "string",
			"more": "string",
			"title": "string",
			"products": "HomeDesignProductResultList",
			"filters": "HomeDesignProductFilter[]"
	},
	"HomeDesignProductFilterValue":{
			"current": "int",
			"value": "string"
	},
	"HomeDesignProductDetailPic":{
			"smallPicUrl": "string",
			"desc": "string",
			"quyu": "string",
			"picUrl": "string"
	},
	"HomeDesignProductInfo":{
			"price": "string",
			"duration": "string",
			"address": "string",
			"huxingDetail": "string",
			"decorateType": "string",
			"categoryName": "string",
			"designer": "string"
	},
	"HomeDesignProductMaterialPriceDetail":{
			"priceUnit": "string",
			"brand": "string",
			"material": "string",
			"quyu": "string"
	},
	"HomeDesignProductPriceDetail":{
			"materialDetails": "HomeDesignProductMaterialPriceDetail[]",
			"materialPrice": "string",
			"constructPrice": "string",
			"designPrice": "string"
	},
	"HomeDesignProductDetail":{
			"consultUnread": "boolean",
			"consultUrl": "string",
			"consultant": "boolean",
			"shop": "Shop",
			"likes": "HomeDesignProductResultList",
			"priceDetail": "HomeDesignProductPriceDetail",
			"info": "HomeDesignProductInfo",
			"basic": "HomeDesignProduct"
	},
	"SpuMenuItem":{
			"saleTime": "string",
			"minPackagePrice": "string",
			"limitDesc": "string",
			"orderedCount": "int",
			"lowLimit": "int",
			"upperLimit": "int",
			"maxPackagePrice": "string",
			"tagInfos": "TagInfo[]",
			"unit": "string",
			"skuItemList": "SkuMenuItem[]",
			"specAttributeList": "SpecAttribute[]",
			"spuId": "int",
			"spuName": "string",
			"picUrl": "string",
			"originPrice": "string",
			"currentPrice": "string",
			"dishSales": "string",
			"tags": "string[]",
			"recomCount": "int",
			"isDishLiked": "boolean",
			"dishTaste": "string",
			"dishType": "int",
			"validity": "boolean",
			"soldOut": "boolean",
			"packagePrice": "string"
	},
	"SkuMenuItem":{
			"maxPackagePrice": "string",
			"minPackagePrice": "string",
			"packageGroupDesc": "string",
			"packageGroupItemList": "PackageGroupItem[]",
			"orderedCount": "int",
			"canUseHui": "boolean",
			"tagInfos": "TagInfo[]",
			"validity": "boolean",
			"saleTime": "string",
			"skuSet": "SimpleSetSku[]",
			"packagePrice": "string",
			"dishType": "int",
			"spec": "HBTPair[]",
			"spuId": "int",
			"unit": "string",
			"menuEvent": "NewMenuEvent",
			"soldOut": "boolean",
			"genusType": "int",
			"tags": "string[]",
			"currentPrice": "string",
			"originPrice": "string",
			"picUrl": "string",
			"skuName": "string",
			"skuId": "int"
	},
	"SpecAttribute":{
			"specValueList": "HBTPair[]",
			"specAttribute": "HBTPair"
	},
	"SpuMenuSet":{
			"name": "string",
			"spuMenuItemList": "SpuMenuItem[]"
	},
	"SpuDishMenuResult":{
			"spuMenuSet": "SpuMenuSet[]",
			"menuExtraInfo": "MenuExtraInfo"
	},
	"SimpleSetSku":{
			"groupId": "int",
			"groupLimit": "int",
			"groupCapacity": "int",
			"setPrice": "double",
			"currentPrice": "string",
			"originPrice": "string",
			"spuId": "int",
			"recomCount": "int",
			"dishSales": "string",
			"offShelf": "boolean",
			"specAttr": "string[]",
			"unit": "string",
			"skuName": "string",
			"groupName": "string",
			"count": "int",
			"skuId": "int"
	},
	"MCStatusDo":{
			"appId": "int",
			"isMCShop": "boolean",
			"isMCUser": "boolean",
			"memberCardID": "int",
			"memberCardDesc": "string",
			"cardLevel": "int",
			"userLevel": "int",
			"thirdPartyType": "int",
			"navigateUrl": "string",
			"tabMsg": "string",
			"subTitle": "string"
	},
	"MemberRelationChangeResultDo":{
			"status": "int"
	},
	"OrderItemList":{
			"orderRemarkItem": "OrderRemarkItem",
			"extraFeeCountItems": "ExtraFeeCountItem[]",
			"seatFeePerson": "int",
			"menuCountItemList": "MenuCountItem[]"
	},
	"SpuGroupOnItem":{
			"packageSpuId": "int",
			"packageSkuId": "int",
			"packageName": "string",
			"skuSet": "SimpleSetSku[]",
			"packageItemAmount": "string"
	},
	"RecommendSpuTabDo":{
			"tabTitle": "string",
			"desc": "string",
			"menus": "SpuMenuItem[]",
			"type": "int"
	},
	"RecommendSpuDo":{
			"menus": "RecommendSpuTabDo[]",
			"defaultNum": "int",
			"maxNum": "int"
	},
	"SkuCartMenuItem":{
			"packageGroupInfo": "string",
			"NewSkuId": "string",
			"skuId": "int",
			"count": "int"
	},
	"SkuGroupCartInfos":{
			"totalExtraFee": "string",
			"extraFeeName": "string",
			"totalSeatFee": "string",
			"othersCartInfos": "SkuCartMenuItem[]",
			"selfCartInfos": "SkuCartMenuItem[]",
			"peopleNumber": "int",
			"message": "string",
			"code": "int"
	},
	"PostSkuOrderResult":{
			"code": "int",
			"title": "string",
			"msg": "string",
			"orderId": "int",
			"oldOrderId": "int",
			"huiPay": "double",
			"noHuiPay": "double"
	},
	"SpuDetail":{
			"timeTag": "string",
			"tagInfos": "TagInfo[]",
			"spuAttribute": "string[]",
			"tags": "string[]",
			"validityDesc": "string",
			"detailUrl": "string",
			"desc": "string"
	},
	"UserCardStatusDo":{
			"shopId": "int",
			"actionUrl": "string",
			"isChecked": "boolean",
			"displayRichText": "string[]",
			"needShow": "boolean",
			"resultType": "int"
	},
	"NoPasswordPayDo":{
			"agreementLinkTxt": "string",
			"agreementTip": "string",
			"agreementUrl": "string",
			"showDialog": "boolean",
			"wxUrl": "string",
			"okBtnTxt": "string",
			"cancelBtnTxt": "string",
			"status": "int",
			"content": "string[]",
			"title": "string"
	},
	"PopularSpuMenuResult":{
			"menuExtraInfo": "MenuExtraInfo",
			"spuMenuItemList": "SpuMenuItem[]"
	},
	"GetPayInfoResult":{
			"hint": "string",
			"schema": "string",
			"contentUrl": "string",
			"content": "string",
			"canUse": "boolean",
			"isOpen": "boolean"
	},
	"KTVRoomType":{
			"ktvBookRooms": "KTVBookRoom[]",
			"roomCapacity": "string",
			"roomName": "string",
			"displayName": "string"
	},
	"ShopAuthenticationInfo":{
			"tagList": "string[]",
			"subTitle": "string",
			"actionUrl": "string"
	},
	"HomeOverSeaCategorySection":{
			"bottomCategoryClickUnits": "IndexVertCategoryInfo[]",
			"topCategoryClickUnits": "IndexVertCategoryInfo[]",
			"title": "string"
	},
	"Discountmv":{
			"unavailableMovieDiscounts": "MovieDiscountPayOption[]",
			"availableMovieDiscounts": "MovieDiscountPayOption[]",
			"discountPrice": "double",
			"endDate": "string",
			"beginDate": "string",
			"discountId": "int",
			"title": "string"
	},
	"DiscountmvList":{
			"list": "Discountmv[]"
	},
	"DiscountmvListPageResult":{
			"unavailableDiscounts": "DiscountList",
			"discounts": "DiscountmvList"
	},
	"TagInfo":{
			"actPrice": "string",
			"type": "int",
			"ruleDesc": "string",
			"color": "string",
			"buyCountDesc": "string",
			"tagDesc": "string",
			"tag": "string",
			"skuId": "int"
	},
	"HomeIndexPopAdSection":{
			"popId": "string",
			"popAdUnit": "HomeClickUnit"
	},
	"HomeDesignProductResultList":{
			"picHeight": "int",
			"picWidth": "int",
			"list": "HomeDesignProduct[]"
	},
	"BookingInfo":{
			"title": "string",
			"phoneList": "string[]"
	},
	"HotelRoom":{
			"rPList": "Event[]",
			"fullRoom": "string",
			"defaultImageUrl": "string",
			"showNum": "int",
			"goodsList": "HotelGoods[]",
			"promoList": "Event[]",
			"price": "int",
			"subtitle": "string",
			"title": "string",
			"roomId": "int"
	},
	"ShopDetailInfo":{
			"picList": "string[]",
			"picTitle": "string",
			"characterDetail": "string",
			"characterTitle": "string",
			"profileDetail": "string",
			"profileTitle": "string",
			"serviceDetail": "string",
			"serviceTitle": "string",
			"actionUrl": "string",
			"title": "string"
	},
	"IndexVertCategoryInfo":{
			"hotName": "string",
			"subTitleTag": "int",
			"homeClickUnit": "HomeClickUnit",
			"tag": "int"
	},
	"PayComponentmv":{
			"notice": "string",
			"amount": "string",
			"name": "string",
			"type": "int"
	},
	"OSProductPromoDO":{
			"type": "int",
			"amount": "string",
			"title": "string"
	},
	"OSTicketDeal":{
			"saleCount": "int",
			"marketPrice": "double",
			"buyUrl": "string",
			"infoList": "string[]",
			"promoTagList": "OSProductPromoDO[]",
			"titleTag": "string",
			"price": "double",
			"ticketTitle": "string",
			"url": "string",
			"dealId": "int"
	},
	"OSTicketGroup":{
			"ticketType": "string",
			"bestPrice": "double",
			"originPrice": "double",
			"ticketDealList": "OSTicketDeal[]",
			"showNum": "int"
	},
	"OSAggreTicket":{
			"shouldShow": "boolean",
			"title": "string",
			"ticketGroupList": "OSTicketGroup[]"
	},
	"JoyTechnician":{
			"url": "string",
			"tid": "int",
			"liked": "boolean",
			"pic": "string",
			"name": "string",
			"title": "string",
			"likeNum": "int"
	},
	"JoyTechnicianList":{
			"shopId": "int",
			"title": "string",
			"list": "JoyTechnician[]"
	},
	"JoyServiceItem":{
			"price": "double",
			"duration": "int",
			"url": "string",
			"sid": "int",
			"liked": "boolean",
			"pic": "string",
			"title": "string",
			"desc": "string",
			"charge": "string",
			"likeNum": "int"
	},
	"JoyServiceItemList":{
			"listUrl": "string",
			"shopId": "int",
			"title": "string",
			"count": "int",
			"list": "JoyServiceItem[]"
	},
	"JoyLikeResult":{
			"success": "boolean"
	},
	"HomeVertCategorySection":{
			"indexVertCategoryInfos": "IndexVertCategoryInfo[]"
	},
	"HomeDesignProductDetailPicResultList":{
			"list": "HomeDesignProductDetailPic[]"
	},
	"PotentialFriend":{
			"type": "int",
			"button": "string",
			"faces": "string[]",
			"content": "string",
			"jumpUrl": "string"
	},
	"MallAdsPromo":{
			"url": "string",
			"pic": "string",
			"subTitle": "string",
			"title": "string"
	},
	"NearbyMall":{
			"url": "string",
			"shopId": "int",
			"promoTitle": "string",
			"mallName": "string",
			"distance": "string",
			"pic": "string"
	},
	"NearbyMallList":{
			"nearbyMalls": "NearbyMall[]",
			"title": "string"
	},
	"ClothesImageTag":{
			"posY": "int",
			"posX": "int",
			"content": "string"
	},
	"AlbumPhotoInfo":{
			"isFullPic": "boolean",
			"photoCount": "int",
			"time": "string",
			"praiseCount": "int",
			"price": "string",
			"title": "string",
			"tag": "string",
			"userName": "string",
			"userID": "int",
			"type": "int"
	},
	"AlbumPhotoInfoList":{
			"photoTagList": "string[]",
			"albumList": "string[]",
			"categoryList": "string[]",
			"list": "AlbumPhotoInfo[]"
	},
	"TAOrderStatusItem":{
			"traceLat": "double",
			"traceLng": "double",
			"statusTime": "string",
			"statusCode": "int",
			"statusContent": "string",
			"statusTitle": "string",
			"iconTag": "int"
	},
	"TAOrderButton":{
			"hurryupStatus": "int",
			"type": "int",
			"message": "string",
			"style": "int"
	},
	"TAHurryUpResp":{
			"callNums": "string[]",
			"sheetTitle": "string",
			"type": "int",
			"content": "string",
			"btns": "HurryUpBtn[]"
	},
	"StatusFlowResp":{
			"mdcId": "long",
			"mtWmPoiId": "int",
			"servicePhones": "string[]",
			"shopPhones": "string[]",
			"shopName": "string",
			"shopId": "int",
			"operations": "TAOrderButton[]",
			"statusItems": "TAOrderStatusItem[]"
	},
	"PopularItemDo":{
			"id": "int",
			"url": "string",
			"shopId": "int",
			"name": "string",
			"imageUrl": "string",
			"originalPrice": "string",
			"price": "string"
	},
	"PopularItemListDo":{
			"showDesc": "string",
			"serviceDesc": "string",
			"showAllUrl": "string",
			"detailList": "PopularItemDo[]"
	},
	"LatestStatusResp":{
			"shopLat": "double",
			"shopLng": "double",
			"addrLng": "double",
			"addrLat": "double",
			"servicePhones": "string[]",
			"shopPhones": "string[]",
			"leftSeconds": "int",
			"interval": "int",
			"operations": "TAOrderButton[]",
			"statusItem": "TAOrderStatusItem"
	},
	"SeatFee":{
			"seatFeeName": "string",
			"defaultPerson": "int",
			"maxPerson": "int",
			"minPerson": "int",
			"isExisted": "boolean",
			"fee": "string"
	},
	"SelectDishShopHuiInfo":{
			"huiTitle": "string",
			"hintAmount": "string",
			"limit": "int",
			"cut": "string",
			"full": "string"
	},
	"SimpleSetSkuInCart":{
			"spec": "string[]",
			"count": "string",
			"name": "string"
	},
	"GenRefundApplyResp":{
			"phones": "string[]",
			"failDescription": "string",
			"reasons": "TAReason[]",
			"code": "int"
	},
	"TAReason":{
			"content": "string",
			"code": "int"
	},
	"GenRefundAppealResp":{
			"reasons": "TAReason[]"
	},
	"HurryUpBtn":{
			"content": "string",
			"type": "int"
	},
	"AdPromoInfo":{
			"icon": "string",
			"content": "string"
	},
	"CategoryServicesDo":{
			"imagePath": "string",
			"btnText": "string",
			"serviceName": "string",
			"appLink": "string"
	},
	"JoyThemeInterval":{
			"promoList": "JoyPromo[]",
			"priceRules": "JoyThemePriceRule[]",
			"priceUnit": "string",
			"period": "string",
			"intervalId": "int",
			"themeId": "int",
			"shopId": "int",
			"day": "time",
			"begin": "time",
			"end": "time",
			"price": "double",
			"buttonType": "int",
			"buttonText": "string"
	},
	"JoyThemeDay":{
			"promoList": "JoyPromo[]",
			"hasHui": "int",
			"chargeType": "int",
			"upperCount": "int",
			"downCount": "int",
			"tips": "string",
			"themeId": "int",
			"shopId": "int",
			"day": "time",
			"today": "boolean",
			"intervalList": "JoyThemeInterval[]"
	},
	"JoyTheme":{
			"hasHui": "int",
			"chargeType": "int",
			"downCount": "int",
			"upperCount": "int",
			"downPrice": "double",
			"upperPrice": "double",
			"bookNum": "string",
			"desc": "string",
			"morePics": "string[]",
			"themeId": "int",
			"shopId": "int",
			"title": "string",
			"pic": "string",
			"level": "int",
			"advice": "string",
			"duration": "int",
			"url": "string",
			"dayList": "JoyThemeDay[]"
	},
	"JoyThemeList":{
			"icon": "string",
			"shopId": "int",
			"title": "string",
			"bookNum": "string",
			"list": "JoyTheme[]"
	},
	"JoyCreateOrderResult":{
			"msg": "string",
			"success": "boolean",
			"orderId": "string"
	},
	"JoyOrderDetail":{
			"promoStr": "string",
			"productID": "int",
			"productType": "int",
			"priceRules": "JoyThemePriceRule[]",
			"bookNo": "string",
			"chargeType": "int",
			"tels": "string[]",
			"pageType": "int",
			"productCode": "int",
			"payType": "int",
			"hasPayment": "boolean",
			"shopTel": "string",
			"themeID": "int",
			"shopID": "int",
			"shopTitle": "string",
			"joyButtonList": "JoyButton[]",
			"refundStatus": "string",
			"bookNum": "int",
			"orderStatusDesc": "string",
			"orderStatus": "int",
			"isCanRefund": "boolean",
			"refundDesc": "string",
			"mPhone": "string",
			"totalPrice": "double",
			"theme": "string",
			"useDate": "string",
			"orderTime": "long",
			"orderNO": "string"
	},
	"JoyPayOrderResult":{
			"returnUrl": "string",
			"orderId": "string",
			"pageTitle": "string",
			"orderInfoTitle": "string",
			"needReservePreviousPages": "int",
			"productCode": "int",
			"payType": "int",
			"msg": "string",
			"code": "int",
			"needRedirect": "boolean",
			"tradeNo": "string",
			"payToken": "string"
	},
	"JoyOrderResult":{
			"promoStr": "string",
			"serviceName": "string",
			"pageType": "int",
			"shopTel": "string",
			"hasPayment": "boolean",
			"shopID": "int",
			"themeID": "int",
			"orderStatusDesc": "string",
			"joyButtonList": "JoyButton[]",
			"url": "string",
			"orderId": "string",
			"phone": "string",
			"totalPrice": "string",
			"num": "string",
			"reservationTime": "string",
			"themeName": "string",
			"shopTitle": "string",
			"tips": "string",
			"orderStatus": "int"
	},
	"JoyAppointTime":{
			"orderNO": "int",
			"appointTime": "string"
	},
	"UgcReviewRecommendResult":{
			"bonusRuleURL": "string",
			"failureJumpURL": "string",
			"list": "UgcReviewRecommend[]"
	},
	"UgcReviewRecommend":{
			"recommendReason": "string",
			"activityText": "string",
			"title": "string",
			"subTitle": "string",
			"imgURL": "string",
			"actionURL": "string",
			"referToken": "string",
			"referType": "int",
			"referID": "string"
	},
	"HotelTuanOrderPageResult":{
			"tags": "string[]",
			"canBuyMax": "int",
			"canBuyMin": "int",
			"price": "double",
			"title": "string",
			"shopName": "string"
	},
	"MtHotelDealGroupDetailResult":{
			"shareUrl": "string",
			"mtDid": "int",
			"dealBookingInfo": "DealBookingInfo",
			"mtDetaliModuleContents": "MtDetaliModuleContent[]",
			"tPHotelBestShops": "TPHotelBestShop[]",
			"priceCalendars": "PriceCalendar[]",
			"detailinfo": "DealGroupDetailInfo",
			"baseinfo": "Deal"
	},
	"BannerRecord":{
			"bannerType": "int",
			"bannerId": "int",
			"picUrl": "string",
			"clickUrl": "string",
			"monitorImpUrl": "string",
			"monitorClickUrl": "string",
			"feedback": "string"
	},
	"SearchBannerResult":{
			"list": "BannerRecord[]"
	},
	"JoyButton":{
			"gaElement": "string",
			"buttonURL": "string",
			"buttonType": "int",
			"buttonText": "string"
	},
	"HotelTuanGouCreateOrderResult":{
			"payUrl": "string"
	},
	"JoyOrderList":{
			"productType": "int",
			"themeName": "string",
			"pageType": "string",
			"hasPayment": "boolean",
			"orderStatusDesc": "string",
			"orderID": "string",
			"headPicURL": "string",
			"bookDate": "string",
			"totalPrice": "string",
			"shopTitle": "string",
			"orderStatus": "int"
	},
	"OSShopTagDO":{
			"tagTitle": "string"
	},
	"UpdateCities":{
			"cities": "City[]",
			"version": "string",
			"type": "int"
	},
	"OSShopAddressDO":{
			"gaoDeCity": "boolean",
			"abroad": "boolean",
			"showPhone": "boolean",
			"showAddressCard": "boolean",
			"publicTransit": "string",
			"landmark": "string",
			"address": "string"
	},
	"DishCartDiscount":{
			"showChangeButton": "boolean",
			"discountMsg": "string",
			"itemList": "DishCartDiscountItem[]"
	},
	"HBTDishGroupEntryDo":{
			"memoRemark": "string",
			"selectiveRemark": "string",
			"dishEntries": "HBTShoppingCartEntryDo[]",
			"actualPrice": "string",
			"originPrice": "string",
			"orderTime": "string",
			"orderTitle": "string"
	},
	"OSListDO":{
			"subTitle": "string",
			"image": "string",
			"title": "string",
			"shopCount": "int",
			"isOfficial": "boolean",
			"link": "string"
	},
	"OSListGroup":{
			"lists": "OSListDO[]",
			"title": "string"
	},
	"SubmitReviewResult":{
			"notice": "string",
			"share": "ShareDo",
			"reviewEncourage": "ReviewEncourage",
			"reviewId": "int"
	},
	"Media":{
			"url": "string",
			"score": "string",
			"star": "int",
			"name": "string",
			"poster": "string"
	},
	"Ent":{
			"entHeadLineList": "EntHeadLineItem[]",
			"mediaList": "Media[]",
			"url": "string",
			"subTitle": "string",
			"title": "string"
	},
	"EntHeadLineItem":{
			"likeCnt": "int",
			"url": "string",
			"reviewCnt": "int",
			"pvCnt": "int",
			"tag": "string",
			"title": "string"
	},
	"WorthGoingModule":{
			"url": "string",
			"subTitle": "string",
			"title": "string",
			"dealList": "Deal[]",
			"worthTopic": "WorthTopic"
	},
	"HomeFriendTravelSection":{
			"homeFriendBanner": "HomeFriendTravelUnit[]"
	},
	"FindRank":{
			"tag": "string",
			"hits": "int",
			"picUrl": "string",
			"url": "string",
			"subTitle": "string",
			"title": "string"
	},
	"ShopRankModule":{
			"url": "string",
			"title": "string",
			"rankList": "FindRank[]",
			"subTitle": "string"
	},
	"FindForumModule":{
			"list": "FindBbsTopic[]",
			"url": "string",
			"subTitle": "string",
			"title": "string"
	},
	"SubmitPhotosResult":{
			"notice": "string",
			"batchId": "string"
	},
	"FindLunch":{
			"followNum": "int",
			"apply": "boolean",
			"subTitle": "string",
			"url": "string",
			"picUrl": "string",
			"title": "string"
	},
	"FreeLunchModule":{
			"lunchList": "FindLunch[]",
			"url": "string",
			"subTitle": "string",
			"title": "string"
	},
	"HomeFriendTravelUnit":{
			"avatars": "string[]"
	},
	"PriceCalendar":{
			"desc": "string",
			"range": "int[]",
			"buyPrice": "double",
			"price": "double",
			"endTime": "long",
			"startTime": "long",
			"type": "int",
			"dealId": "int",
			"uid": "int"
	},
	"TravelEvent":{
			"shortTitle": "string",
			"color": "string",
			"bgColor": "string",
			"desc": "string"
	},
	"TravelZeusSpu":{
			"id": "int",
			"title": "string",
			"tag": "string",
			"price": "int",
			"saleCount": "int",
			"saleCountText": "string",
			"detailUrl": "string",
			"promoList": "TravelEvent[]"
	},
	"TravelZeusSpuListResult":{
			"spuList": "TravelZeusSpu[]",
			"showNum": "int"
	},
	"JoyRefundProcessList":{
			"refundTitle": "string",
			"refundDesc": "string"
	},
	"MtDetaliModuleContent":{
			"subtype": "int",
			"type": "int",
			"content": "string",
			"price": "double",
			"total": "double",
			"specification": "string"
	},
	"EventInfo":{
			"eventType": "int",
			"eventStatus": "int",
			"eventSummary": "string",
			"eventPrice": "string"
	},
	"DealBookingInfo":{
			"bookingRequirment": "string",
			"needBook": "int",
			"needPhoneBook": "int",
			"appointHour": "int",
			"desc": "string",
			"phoneBookingNum": "string"
	},
	"HbtActivity":{
			"commonActivityInfo": "CommonActivityInfos",
			"dishCartRecommend": "DishCartRecommend",
			"dishCartDiscount": "DishCartDiscount"
	},
	"DishCartDiscountItem":{
			"spuMenuItem": "SpuMenuItem",
			"limit": "int",
			"actId": "string"
	},
	"DishCartRecommend":{
			"showChangeButton": "boolean",
			"noHuiMsg": "string",
			"spuIdList": "int[]",
			"huiMsg": "string"
	},
	"FitnessBookProduct":{
			"promo": "string",
			"name": "string",
			"id": "int"
	},
	"FitnessBook":{
			"title": "string",
			"shopPhone": "string[]",
			"actionTitle": "string",
			"userPhone": "string",
			"productList": "FitnessBookProduct[]"
	},
	"TAShopList":{
			"lng": "double",
			"lat": "double"
	},
	"FitnessBookAction":{
			"actionUrl": "string"
	},
	"HUIActivityLevel":{
			"status": "int",
			"cut": "string",
			"full": "string",
			"levelId": "string"
	},
	"HUIActivity":{
			"showIndentation": "boolean",
			"levels": "HUIActivityLevel[]",
			"statusMsg": "string",
			"status": "int",
			"desc": "string",
			"title": "string",
			"activityId": "string"
	},
	"HUIActivityListDo":{
			"amount": "string",
			"activities": "HUIActivity[]"
	},
	"HUILevelOffer":{
			"rule": "string",
			"selected": "boolean",
			"status": "int",
			"cut": "double",
			"desc": "string",
			"subTitle": "string",
			"title": "string",
			"uid": "int"
	},
	"HUIOffer":{
			"showIndentation": "boolean",
			"discountTip": "string",
			"interactionEnable": "boolean",
			"deductionHighlight": "boolean",
			"needLogin": "boolean",
			"showDeduction": "boolean",
			"levelOffers": "HUILevelOffer[]",
			"deduction": "string",
			"status": "int",
			"showStatus": "boolean",
			"desc": "string",
			"title": "string",
			"uid": "int"
	},
	"HUIBusiness":{
			"status": "int",
			"title": "string",
			"type": "int"
	},
	"TAOrderActionEntity":{
			"mdcId": "long",
			"mtWmPoiId": "int",
			"applyCancelDesc": "string",
			"thirdPartyName": "string",
			"thirdPartyPhone": "string",
			"dianpingPhone": "string",
			"lng": "double",
			"lat": "double",
			"mtOrderId": "string",
			"orderViewId": "string",
			"isMTOrder": "boolean",
			"shopName": "string",
			"shopId": "int",
			"shopPhones": "string[]",
			"servicePhones": "string[]"
	},
	"HUIBusinessListDo":{
			"amount": "string"
	},
	"HUIPayType":{
			"selected": "boolean",
			"payType": "int"
	},
	"HUIPayStatus":{
			"merchantAmount": "string",
			"statusMsg": "string",
			"reviewInfo": "HuiReviewInfo",
			"contactMerchantTip": "string",
			"ticketShare": "HuiTicketShareDo",
			"shareTip": "ShareTip",
			"payShare": "ShareDo",
			"noDiscountAmount": "string",
			"mobileNumber": "string",
			"serialNumber": "string",
			"activityItems": "BookingUrlItemVO[]",
			"discounts": "DiscountDo[]",
			"saveAmount": "string",
			"currentAmount": "string",
			"depositeAmount": "string",
			"oriAmount": "string",
			"time": "string",
			"shopName": "string"
	},
	"HUIJsMerchantDiscountCollection":{
			"discountedAmount": "double",
			"finalAmount": "double",
			"selectedList": "HUIJsMerchantDiscount[]"
	},
	"HUIMerchantDiscount":{
			"discountConditionDo": "DiscountConditionDo",
			"couponRule": "string",
			"validPeriod": "string",
			"desc": "string",
			"couponValue": "string",
			"showCheckbox": "boolean",
			"showLevelOffers": "boolean",
			"bottomTips": "string",
			"titleJson": "string",
			"title": "string"
	},
	"HUIJsMerchantDiscountParams":{
			"noDiscountAmount": "double",
			"totalAmount": "string",
			"selectedList": "HUIJsMerchantDiscount[]",
			"lastSelected": "HUIJsMerchantDiscount"
	},
	"HUIJsCalculatePointsParams":{
			"amount": "double",
			"hasDpActivity": "boolean"
	},
	"HUIJsCalculatePoints":{
			"pointsTips": "string",
			"enable": "boolean",
			"points": "double"
	},
	"HUIJsBookDeposit":{
			"tipsText": "string",
			"deductedAmount": "double",
			"finalAmount": "double",
			"isDeducted": "boolean"
	},
	"HUIJsCalculateBookDepositParams":{
			"amount": "double"
	},
	"JoyThemeDayList":{
			"list": "JoyThemeDay[]"
	},
	"BuyTip":{
			"highLight": "string",
			"desc": "string",
			"title": "string"
	},
	"MTPayProduct":{
			"tradeNumber": "string",
			"payToken": "string"
	},
	"KTVAdItem":{
			"gAElementId": "string",
			"imgPath": "string",
			"url": "string",
			"subTitle": "string",
			"title": "string",
			"name": "string"
	},
	"KTVAdGroup":{
			"adItems": "KTVAdItem[]",
			"position": "string"
	},
	"HomeDesignWuYou":{
			"serviceList": "string[]",
			"detailPageUrl": "string",
			"toDetailPageDesc": "string",
			"title": "string"
	},
	"HomeDesigner":{
			"speciality": "string",
			"designerName": "string",
			"designerUrl": "string",
			"designerId": "int",
			"designerPic": "string",
			"workYear": "string"
	},
	"HomeDesignerWrap":{
			"designerList": "HomeDesigner[]",
			"listPageUrl": "string",
			"toListPageDesc": "string",
			"title": "string"
	},
	"HomeShopInfo":{
			"consultFirst": "boolean",
			"consultUnread": "boolean",
			"consultUrl": "string",
			"bookingButtonInside": "string",
			"bookingButtonOut": "string",
			"consultant": "boolean",
			"wuyou": "HomeDesignWuYou",
			"promoList": "WeddingPromo[]",
			"bookingType": "int",
			"isBooking": "boolean",
			"dPShopId": "int"
	},
	"HomeDesignCaptain":{
			"workYear": "string",
			"captainPic": "string",
			"captainId": "int",
			"captainUrl": "string",
			"captainName": "string"
	},
	"HomeDesignCaptainWrap":{
			"captainList": "HomeDesignCaptain[]",
			"listPageUrl": "string",
			"toListPageDesc": "string",
			"title": "string"
	},
	"TunnelTest":{
			"content": "string"
	},
	"TABlock":{
			"scheme": "string",
			"picurl": "string",
			"content": "string",
			"title": "string"
	},
	"EduVideoDo":{
			"detailLink": "string",
			"picUrl": "string",
			"videoName": "string"
	},
	"EduVideoModuleDo":{
			"videoListPageUrl": "string",
			"title": "string",
			"count": "int",
			"videoList": "EduVideoDo[]"
	},
	"DishMenuSearchItem":{
			"desc": "string",
			"dishName": "string"
	},
	"DishMenuSearchResult":{
			"dishMenuSearchItemList": "DishMenuSearchItem[]"
	},
	"SpuMenuSearchResult":{
			"searchBlankSubTitle": "string",
			"searchBlankSchema": "string",
			"searchBlankBtnName": "string",
			"searchBlankTitle": "string",
			"spuList": "int[]"
	},
	"PackageGroupSku":{
			"spuId": "int",
			"recomCount": "int",
			"dishSales": "string",
			"specAttr": "string[]",
			"offShelf": "boolean",
			"name": "string",
			"price": "string",
			"unit": "string",
			"count": "int",
			"skuId": "int"
	},
	"PackageGroupItem":{
			"groupType": "int",
			"groupName": "string",
			"groupLimit": "int",
			"groupId": "int",
			"groupSkuList": "PackageGroupSku[]",
			"groupDesc": "string"
	},
	"KTVAdGroupWidget":{
			"kTVAdGroups": "KTVAdGroup[]"
	},
	"RefundOrderLink":{
			"linkText": "string",
			"link": "string",
			"isShow": "boolean"
	},
	"MovieDealOrder":{
			"receiptEndDate": "time",
			"dealOrderNumber": "int",
			"paidAmount": "string",
			"dealSerialNum": "string[]",
			"dealTitle": "string",
			"dealOrderStatus": "int",
			"dealBuyLink": "string",
			"dealOrderDetailLink": "string",
			"dealId": "int",
			"movieOrderId": "int"
	},
	"BookAllPaySchemeDetail":{
			"resultMsg": "string",
			"resultCode": "int",
			"url": "string"
	},
	"BookDescSegment":{
			"desc": "string[]",
			"title": "string"
	},
	"BookPaymentInfo":{
			"desc": "BookDescSegment[]",
			"amount": "string",
			"title": "string"
	},
	"BookAllPayConfigInfo":{
			"status": "int"
	},
	"NFRecShopBean":{
			"picurl": "string",
			"targeturl": "string",
			"shopname": "string",
			"distance": "double",
			"shopid": "int"
	},
	"MTDealBase":{
			"notice": "string",
			"effectSpan": "string",
			"costSpan": "string",
			"redeemType": "int",
			"branchLocations": "string",
			"lightning": "boolean",
			"mtOptionalAttrs": "MtOptionalAttrs",
			"soldStr": "string",
			"dealBuyConfig": "MtDealBuyConfig",
			"originalPrice": "double",
			"dealType": "int",
			"promotionInfos": "MtPromotionInfo[]",
			"convertTrack": "string",
			"stid": "string",
			"isVoucher": "boolean",
			"mtDealCampaigns": "MtDealCampaign[]",
			"icons": "MtIcon[]",
			"securityInfoItems": "MtSecurityInfoItem[]",
			"ratingModel": "MtRatingModel",
			"availableToday": "boolean",
			"campaignStrategy": "string",
			"mtSalesTag": "MtSalesTag",
			"menuDigest": "string",
			"iUrl": "string",
			"frontPoiCates": "int[]",
			"payType": "int",
			"shops": "MtPoiModel[]",
			"end": "time",
			"recReason": "string",
			"start": "time",
			"announcementTitle": "string",
			"hotelExt": "string",
			"bookingInfo": "string",
			"hotelRoomName": "string",
			"shop": "MtPoiModel",
			"brandName": "string",
			"startTime": "time",
			"deposit": "double",
			"festCanUse": "int",
			"range": "string",
			"mlls": "string",
			"couponTitle": "string",
			"value": "double",
			"mealCount": "string",
			"couponBeginTime": "time",
			"appleLottery": "int",
			"ktvPlan": "string",
			"pitchHtml": "string",
			"priceCalendars": "MtPriceCalendar[]",
			"slug": "string",
			"endTime": "time",
			"dt": "int",
			"subCate": "string",
			"mtitle": "string",
			"expireAutoRefund": "int",
			"campaigns": "string",
			"ctype": "int",
			"mname": "string",
			"canBuyPrice": "double",
			"terms": "MtTerm[]",
			"status": "int",
			"channel": "string",
			"price": "double",
			"tips": "string",
			"isAppointOnline": "boolean",
			"squareImgUrl": "string",
			"todayAvailable": "boolean",
			"campaignPrice": "double",
			"state": "int",
			"campaignTag": "string",
			"securityInfo": "string",
			"howUse": "string",
			"menus": "MtMenu[]",
			"title": "string",
			"cate": "string",
			"poiIds": "int[]",
			"noBooking": "int",
			"rdCount": "int",
			"couponEndTime": "time",
			"imgUrl": "string",
			"id": "int",
			"solds": "int",
			"smsTitle": "string",
			"tag": "string",
			"optionalAttrs": "string",
			"satisfaction": "double",
			"bookingPhone": "string",
			"showType": "string",
			"dtype": "int",
			"refund": "int",
			"salesTag": "string",
			"attrJson": "string",
			"murl": "string",
			"curcityRdCount": "int"
	},
	"NFRecResultBean":{
			"message": "string",
			"resultcode": "int",
			"shoplist": "NFRecShopBean[]"
	},
	"PoiInfo":{
			"lat": "double",
			"districtid": "int",
			"bizloginid": "int",
			"isQueuing": "boolean",
			"showType": "string",
			"name": "string",
			"iUrl": "string",
			"avgScore": "double",
			"areaName": "string",
			"traffic": "string",
			"poiid": "int",
			"city": "int",
			"brandId": "int",
			"ktvAppointStatus": "int",
			"lng": "double",
			"addr": "string",
			"frontimg": "string",
			"areaid": "int",
			"cityId": "int",
			"markNumbers": "int",
			"districtname": "string",
			"phone": "string",
			"multiType": "string",
			"canSelfVerify": "boolean"
	},
	"ShopDelta":{
			"voteTotal": "int",
			"picCount": "int"
	},
	"SceneModeIHeader":{
			"bizID": "string",
			"showCount": "int",
			"tagId": "string",
			"detailInfoSchema": "string",
			"subTitle": "string",
			"mainTitle": "string"
	},
	"MovieDealDetail":{
			"structedDetails": "Pair[]",
			"dealGroupId": "int"
	},
	"NearbyHeadlineUnit":{
			"avatars": "string[]"
	},
	"NearbyHeadLine":{
			"shouldAnimate": "boolean",
			"nearbyHint": "string",
			"address": "string",
			"list": "NearbyHeadlineUnit[]"
	},
	"ZeusStockInfo":{
			"discountId": "int",
			"discountStock": "int",
			"discountPrice": "double",
			"price": "double",
			"stock": "int",
			"date": "string"
	},
	"ZeusPriceCalendarResult":{
			"displayLeftStockThreshold": "int",
			"stocks": "ZeusStockInfo[]",
			"availableTime": "int",
			"packageId": "int"
	},
	"ZeusProductTermInfo":{
			"title": "string",
			"content": "string[]"
	},
	"ZeusOrderInfoKey":{
			"label": "string",
			"type": "string",
			"defaultContext": "string",
			"errorMsg": "string",
			"key": "string"
	},
	"ZeusLandscapeInfo":{
			"id": "string",
			"name": "string",
			"dates": "string[]"
	},
	"ZeusSkuInfo":{
			"id": "int",
			"name": "string",
			"price": "double",
			"passengerBaseCount": "int",
			"defaultPassengerCount": "int",
			"defaultCount": "int",
			"minLimit": "int"
	},
	"ZeusOrderFormResult":{
			"orderConfirmTimeWarm": "string",
			"maxLimit": "int",
			"skus": "ZeusSkuInfo[]",
			"landscapes": "ZeusLandscapeInfo[]",
			"contactInfoKeys": "ZeusOrderInfoKey[]",
			"passengerInfoKeys": "ZeusOrderInfoKey[]",
			"warmInfos": "ZeusProductTermInfo[]",
			"title": "string",
			"packageDetail": "string"
	},
	"JoyService":{
			"promoList": "JoyPromo[]",
			"displayPrice": "string",
			"url": "string",
			"pic": "string",
			"buttonType": "int",
			"buttonText": "string",
			"price": "double",
			"originalPrice": "double",
			"serviceId": "int",
			"shopId": "int",
			"title": "string",
			"time": "string"
	},
	"JoyServiceDay":{
			"promoList": "JoyPromo[]",
			"today": "boolean",
			"shopId": "int",
			"day": "time",
			"serviceList": "JoyService[]"
	},
	"JoyServiceDayList":{
			"list": "JoyServiceDay[]",
			"shopId": "int",
			"title": "string",
			"icon": "string",
			"bookNum": "string"
	},
	"IssueCouponComponent":{
			"couponOptionList": "IssueCouponOption[]"
	},
	"JoyServiceTime":{
			"scheduleId": "int",
			"serviceId": "int",
			"price": "double",
			"day": "time",
			"selected": "boolean",
			"timeDesc": "string",
			"status": "int",
			"next": "boolean",
			"time": "string"
	},
	"JoyServiceSelectResult":{
			"scheduleId": "int",
			"orderId": "string",
			"shopId": "int",
			"serviceId": "int",
			"phone": "string",
			"bookNum": "int",
			"price": "double",
			"tip": "string",
			"selectTime": "JoyServiceTime[]",
			"maxCount": "int",
			"minCount": "int",
			"url": "string",
			"desc": "string",
			"pic": "string",
			"title": "string"
	},
	"MtPoiModel":{
			"icons": "string[]",
			"convertTrack": "string",
			"stid": "string",
			"poiLabels": "MtPoiLabel[]",
			"adsInfo": "MtAdsInfo",
			"showChannel": "string",
			"smPromotion": "MtPromotionItem[]",
			"ktvAppointStatus": "int",
			"ktvLowestPrice": "double",
			"ktv": "MtKtvModel",
			"smCampaign": "string",
			"cateName": "string",
			"mtAliasPayAbstractsList": "MtAliasPayAbstracts[]",
			"areaName": "string",
			"merchantSettleInfo": "MtMerchantSettleInfoList",
			"isNativeSm": "int",
			"areaId": "int",
			"cates": "string",
			"cityId": "int",
			"campaignTag": "string",
			"collectionDeals": "MTDealBase[]",
			"supportAppointment": "boolean",
			"sourceType": "int",
			"isSalon": "int",
			"subwayStationId": "string",
			"landmarkIds": "string",
			"isQueuing": "int",
			"abstracts": "string",
			"scoreSource": "int",
			"scoreRatio": "double",
			"iUrl": "string",
			"payType": "string",
			"payAbstracts": "string",
			"payExtraInfo": "string",
			"NewPayInfo": "MtNewPayInfo",
			"payInfo": "MtPayInfo",
			"groupInfo": "int",
			"discount": "string",
			"isHot": "int",
			"historyCouponCount": "int",
			"latestWeekCoupon": "int",
			"mallName": "string",
			"mallId": "int",
			"closeStatus": "int",
			"floor": "string",
			"dIds": "string",
			"hasGroup": "boolean",
			"parkingInfo": "string",
			"wifi": "boolean",
			"frontImg": "string",
			"marknumbers": "int",
			"avgscore": "double",
			"brandStory": "string",
			"brandLogo": "string",
			"brandName": "string",
			"brandId": "int",
			"lowestprice": "double",
			"avgprice": "double",
			"featureMenus": "string",
			"openInfo": "string",
			"style": "string",
			"introduction": "string",
			"mergedId": "int",
			"isAccurate": "int",
			"poiType": "int",
			"name": "string",
			"addr": "string",
			"lng": "double",
			"lat": "double",
			"showType": "string",
			"rawTags": "string",
			"phone": "string",
			"uid": "int"
	},
	"DropLive":{
			"liveInfo": "ClickEntity"
	},
	"ZeusCreateOrderResult":{
			"orderId": "string",
			"payUrl": "string"
	},
	"IssueCouponOption":{
			"enable": "boolean",
			"desc": "string",
			"title": "string",
			"tag": "string",
			"amount": "double",
			"uid": "int"
	},
	"IssueCouponMsg":{
			"content": "string[]",
			"errorMsg": "string",
			"errorCode": "int"
	},
	"OSShopBookDo":{
			"link": "string",
			"bookable": "boolean",
			"showNew": "boolean",
			"showLink": "boolean"
	},
	"PromoteDetail":{
			"bottomPromoteDesc": "string",
			"canUse": "boolean",
			"source": "int",
			"promoteType": "int",
			"promoteMoney": "double",
			"promoteDesc": "string",
			"promoteTitle": "string",
			"promoteId": "string"
	},
	"MtRedPaper":{
			"nextUrl": "string",
			"title": "string",
			"iosUrl": "string",
			"androidUrl": "string",
			"display": "boolean",
			"campaignid": "int"
	},
	"MtPayInfo":{
			"mtRedPaper": "MtRedPaper",
			"imaitonUrl": "string",
			"validity": "int",
			"title": "string",
			"subtitle": "string",
			"buttontext": "string",
			"iconUrl": "string",
			"data": "string",
			"iUrl": "string"
	},
	"MtNewPayInfo":{
			"showLength": "int",
			"businessName": "string",
			"payInfo": "MtPayInfo",
			"order": "string"
	},
	"MtMerchantSettleInfo":{
			"iosUrl": "string",
			"androidUrl": "string",
			"nextUrl": "string",
			"imgUrl": "string",
			"title": "string"
	},
	"MtMerchantSettleInfoList":{
			"settleNow": "MtMerchantSettleInfo",
			"settleNowJO": "MtMerchantSettleInfo",
			"entrance": "MtMerchantSettleInfo",
			"entranceJO": "MtMerchantSettleInfo",
			"imageInfo": "MtMerchantSettleInfo",
			"imageInfoJO": "MtMerchantSettleInfo",
			"moreInfo": "MtMerchantSettleInfo",
			"moreInfoJO": "MtMerchantSettleInfo"
	},
	"MtPromotionItem":{
			"pdetail": "string",
			"starttime": "long",
			"endtime": "long",
			"promotionShow": "string"
	},
	"MtKtvModel":{
			"ktvAbstracts": "MtAliasPayAbstracts[]",
			"ktvBookUrl": "string",
			"ktvIconURL": "string",
			"ktvIUrl": "string",
			"tips": "string",
			"ktvAppointStatus": "int",
			"lowestPrice": "double"
	},
	"MtAliasPayAbstracts":{
			"desc": "string",
			"iconUrl": "string",
			"abstracts": "string",
			"type": "string"
	},
	"OSAppPromoDo":{
			"endDate": "string",
			"startDate": "string",
			"promotionScheme": "string",
			"url": "string",
			"md5": "string",
			"available": "boolean"
	},
	"OSAppConfigDo":{
			"appSkinConfig": "OSAppPromoDo",
			"appPromotionConfig": "OSAppPromoDo"
	},
	"WeddingShopCalendarInfo":{
			"today": "string",
			"url": "string",
			"title": "string",
			"totalMonthsInfoList": "EveryMonthCalendarInfo[]"
	},
	"MtSalesTag":{
			"color": "string",
			"text": "string"
	},
	"MtRatingModel":{
			"subCount": "int",
			"rateCount": "int",
			"satisfaction": "double",
			"rating": "double"
	},
	"PriceAndStockInfoDo":{
			"date": "string",
			"priceLevel": "int",
			"stock": "int",
			"price": "string"
	},
	"EveryMonthCalendarInfo":{
			"list": "PriceAndStockInfoDo[]",
			"dateYearMonth": "string"
	},
	"MtSecurityInfoItem":{
			"desc": "string",
			"name": "string",
			"alias": "string",
			"id": "int"
	},
	"MtIcon":{
			"iconName": "string",
			"status": "int",
			"key": "int"
	},
	"PayAbstract":{
			"type": "string",
			"iconUrl": "string",
			"title": "string"
	},
	"EduGoodReivewInfoDo":{
			"detailLink": "string",
			"subTitle": "string",
			"title": "string",
			"reviewCount": "int"
	},
	"MtDealId2Stid":{
			"stid": "string",
			"dealid": "int"
	},
	"JoyServiceTimeList":{
			"list": "JoyServiceTime[]"
	},
	"MtDealCampaign":{
			"color": "string",
			"shortTag": "string",
			"festival": "string",
			"id": "int",
			"infoUrl": "string",
			"buyStatus": "int",
			"type": "int",
			"logo": "string",
			"tag": "string",
			"longTitle": "string"
	},
	"HotelShopList":{
			"floorNavs": "Category[]",
			"categoryNavs": "Pair[]",
			"filterNavs": "Pair[]",
			"imageUrl": "string"
	},
	"ZeusSpuPackage":{
			"defaultPic": "string",
			"buyUrl": "string",
			"promoTag": "string",
			"desc": "string",
			"packagePrice": "double",
			"packageTitle": "string",
			"productId": "int",
			"packageId": "int"
	},
	"ZeusProduct":{
			"spuReviewOverView": "SpuReviewOverView",
			"serviceLabelList": "LinkDo[]",
			"zeusSpuPackageList": "ZeusSpuPackage[]",
			"buyConfig": "HotelBuyConfig",
			"serviceLabelLink": "string",
			"eventList": "TravelEvent[]",
			"saleCountDesc": "string",
			"saleCount": "int",
			"shareUrl": "string",
			"moreDetailUrl": "string",
			"picUrlList": "string[]",
			"defaultPicUrl": "string",
			"marketPrice": "double",
			"price": "double",
			"subtitle": "string",
			"title": "string",
			"productId": "int"
	},
	"FeeInstruction":{
			"feeInstructions": "string[]",
			"feeExcludes": "string[]",
			"feeIncludes": "string[]"
	},
	"ZeusProductDetail":{
			"reservationNumberList": "string[]",
			"otaName": "string",
			"confirmDesc": "string",
			"orderPolicy": "string",
			"refundNoticeList": "string[]",
			"tips": "string[]",
			"howToUse": "string[]",
			"feeInstruction": "FeeInstruction",
			"recommendReasonList": "string[]",
			"otaProductId": "string",
			"productId": "int"
	},
	"ZeusProductShopsResult":{
			"otherShopShowNum": "int",
			"restaurantShowNum": "int",
			"scenicShowNum": "int",
			"hotelShowNum": "int",
			"otherShopList": "Shop[]",
			"restaurantList": "Shop[]",
			"scenicList": "Shop[]",
			"hotelList": "Shop[]"
	},
	"AdInfo":{
			"id": "int",
			"schemaUrl": "string",
			"picUrl": "string"
	},
	"BookingSuggestPOI":{
			"recordNum": "int",
			"bookingNum": "string",
			"dishType": "string",
			"commercialArea": "string",
			"avgPrice": "int",
			"compartmentTag": "string",
			"discountTag": "string",
			"starNum": "int",
			"schemaUrl": "string",
			"picUrl": "string",
			"name": "string"
	},
	"BookingSuggestResult":{
			"bookingSuggestPOIList": "BookingSuggestPOI[]",
			"title": "string"
	},
	"ExtraFeeItem":{
			"chooseDesc": "string",
			"canUseHui": "boolean",
			"itemId": "int",
			"defaultValue": "int",
			"max": "int",
			"min": "int",
			"price": "string",
			"required": "boolean",
			"name": "string"
	},
	"OrderExtraFeeItem":{
			"majorFeeId": "int",
			"extraFeeItems": "ExtraFeeItem[]",
			"name": "string"
	},
	"SelectiveRemark":{
			"chooseDesc": "string",
			"itemId": "int",
			"isMultiplied": "boolean",
			"values": "string[]",
			"name": "string"
	},
	"OrderRemark":{
			"memoPlaceHolder": "string",
			"selectiveRemarks": "SelectiveRemark[]",
			"memoMaxWords": "int",
			"hasMemo": "boolean",
			"name": "string"
	},
	"ExtraFeeCountItem":{
			"itemId": "int",
			"count": "int",
			"name": "string"
	},
	"SelectiveRemarkItem":{
			"itemId": "int",
			"values": "string[]",
			"name": "string"
	},
	"OrderRemarkItem":{
			"selectiveRemarkItems": "SelectiveRemarkItem[]",
			"memoRemark": "string"
	},
	"CommonActivityInfos":{
			"activityRelations": "ActivityRelation[]",
			"dishActivities": "DishActivity[]"
	},
	"DishActivity":{
			"actId": "int",
			"hintText": "string",
			"emphasisJson": "string",
			"emphasis": "string",
			"desc": "string",
			"longTag": "string",
			"shortTag": "string",
			"type": "int"
	},
	"ActivityRelation":{
			"actId": "int",
			"skuId": "int",
			"spuId": "int"
	},
	"TakeawayCategoryDish":{
			"spuAttrs": "TaSpuAttr[]",
			"skuDishes": "TaSkuDish[]",
			"activity": "TAActivity",
			"minPrice": "string",
			"salesVolume": "string",
			"bigImageUrl": "string",
			"littleImageUrl": "string",
			"tip": "string",
			"dishIntroduction": "string",
			"hotNum": "string",
			"hotStatus": "int",
			"isPurchase": "boolean",
			"name": "string",
			"spuId": "long"
	},
	"TakeawayFoodCategory":{
			"maxCount": "int",
			"dishes": "TakeawayCategoryDish[]",
			"name": "string"
	},
	"JoyThemePriceRule":{
			"selected": "boolean",
			"ruleId": "string",
			"count": "int",
			"reducePrice": "double",
			"desc": "string"
	},
	"MtAdsInfo":{
			"adExplanationTags": "string",
			"impressionUrl": "string",
			"override": "int",
			"clickUrl": "string",
			"adFlagUrl": "string",
			"adType": "int"
	},
	"GameDo":{
			"desc": "string",
			"recommendReason": "string",
			"picUrl": "string",
			"url": "string",
			"promotionRec": "string",
			"name": "string",
			"id": "int"
	},
	"MtParkInfo":{
			"parkingtype": "string",
			"promodetail": "string",
			"promotitle": "string",
			"type": "int",
			"price": "string",
			"businesstime": "string"
	},
	"MtMallInfo":{
			"wifi": "string",
			"parkInfo": "MtParkInfo"
	},
	"MTBeautyDealItemVo":{
			"type": "string",
			"desc": "string",
			"amount": "double",
			"num": "int",
			"iconName": "string"
	},
	"MTBeautyDealGroupVo":{
			"itemList": "MTBeautyDealItemVo[]",
			"gap": "string"
	},
	"MTBeautyDealVo":{
			"beautyTable": "MtMenu[]",
			"isBeautyDeal": "boolean"
	},
	"MtTerm":{
			"title": "string",
			"contents": "string[]"
	},
	"TASkuDishData":{
			"dishSetId": "string",
			"spuId": "long",
			"minFeeCalType": "int",
			"dishName": "string",
			"quantity": "int",
			"dishSetName": "string",
			"dishSetType": "int"
	},
	"MtPromotionInfo":{
			"id": "int",
			"color": "string",
			"shortTag": "string",
			"festival": "string",
			"buyStatus": "int",
			"infoUrl": "string",
			"logo": "string",
			"type": "int",
			"tag": "string",
			"longTitle": "string"
	},
	"MtDealBuyConfig":{
			"priceStrikeThrough": "boolean",
			"buttonEnable": "boolean",
			"buttonText": "string"
	},
	"UserLike":{
			"isUserLike": "int",
			"count": "int"
	},
	"NewsItem":{
			"isLiked": "boolean",
			"url": "string",
			"imgUrl": "string",
			"reviewCnt": "int",
			"likeCnt": "int",
			"pvCnt": "int",
			"tags": "string[]",
			"title": "string",
			"uid": "int"
	},
	"HomeNews":{
			"nextIndex": "int",
			"lastPage": "boolean",
			"NewsList": "NewsItem[]",
			"url": "string",
			"subTitle": "string",
			"title": "string"
	},
	"CommResponse":{
			"msg": "string",
			"code": "int"
	},
	"MtPriceCalendar":{
			"type": "int",
			"buyPrice": "double",
			"dealId": "int",
			"range": "string[]",
			"canBuyPrice": "double",
			"price": "double",
			"startTime": "time",
			"desc": "string",
			"uid": "int",
			"endTime": "time"
	},
	"MtOptionalAttrs":{
			"key11070001": "string",
			"key11020004": "string",
			"key575": "string",
			"key972": "string",
			"key11020003": "string",
			"key999887": "string"
	},
	"NewsCategory":{
			"name": "string",
			"categoryID": "int"
	},
	"AggNewsItem":{
			"uid": "int",
			"url": "string",
			"NewsAbstract": "string",
			"likeCnt": "int",
			"reviewCnt": "int",
			"pvCnt": "int",
			"subTitle": "string",
			"title": "string",
			"categoryName": "string",
			"backgroundImg": "string",
			"type": "int",
			"userImg": "string"
	},
	"AggNews":{
			"nextIndex": "int",
			"lastPage": "boolean",
			"NewsList": "AggNewsItem[]"
	},
	"NewsCategoryList":{
			"categoryList": "NewsCategory[]"
	},
	"MtPoiLabel":{
			"tag": "string",
			"type": "string",
			"postText": "string",
			"color": "string",
			"desc": "string",
			"name": "string",
			"iconUrl": "string"
	},
	"GameListDo":{
			"banner": "AggMediaBannerItem",
			"list": "GameDo[]"
	},
	"TopGameListDo":{
			"url": "string",
			"list": "GameDo[]",
			"subTitle": "string",
			"title": "string"
	},
	"NewSplashes":{
			"splashUrlTemplate": "string",
			"data": "SplashImgInfo[]"
	},
	"HomeMediaItem":{
			"url": "string",
			"score": "string",
			"img": "string",
			"subTitle": "string",
			"title": "string"
	},
	"HomeMedia":{
			"subTitle": "string",
			"title": "string",
			"url": "string",
			"mediaList": "HomeMediaItem[]"
	},
	"AggMediaBannerItem":{
			"url": "string",
			"image": "string"
	},
	"AggMediaBanner":{
			"count": "int",
			"banners": "AggMediaBannerItem[]"
	},
	"AggMediaItem":{
			"star": "int",
			"score": "string",
			"subTitle": "string",
			"title": "string",
			"url": "string",
			"img": "string"
	},
	"AggMediaModule":{
			"url": "string",
			"subTitle": "string",
			"title": "string",
			"mediaList": "AggMediaItem[]"
	},
	"BulletScreen":{
			"addTime": "string",
			"content": "string",
			"mood": "string",
			"bulletScreenId": "int"
	},
	"AggMediaModuleList":{
			"mediaModuleList": "AggMediaModule[]"
	},
	"MtMenuDetail":{
			"totalPrice": "string",
			"specification": "string",
			"content": "string"
	},
	"MtMenu":{
			"hint": "string",
			"title": "string",
			"menuDetails": "MtMenuDetail[]",
			"tips": "string[]"
	},
	"ZeusRecommendProduct":{
			"promoList": "TravelEvent[]",
			"detailUrl": "string",
			"saleCountText": "string",
			"saleCount": "int",
			"marketPrice": "int",
			"price": "int",
			"title": "string",
			"id": "int"
	},
	"ZeusRecommendProductInfo":{
			"showNum": "int",
			"recommendSpuList": "ZeusRecommendProduct[]"
	},
	"OSShopIntroDO":{
			"show": "boolean",
			"title": "string",
			"businessHour": "string",
			"shopProperties": "string[]",
			"altName": "string",
			"phoneNOs": "string[]"
	},
	"BrandAd":{
			"monitorImpUrlList": "string[]",
			"monitorClickUrlList": "string[]",
			"feedback": "string",
			"monitorClickUrl": "string",
			"monitorImpUrl": "string",
			"clickUrl": "string",
			"imgUrl": "string"
	},
	"FindEntity":{
			"topicId": "int",
			"title": "string",
			"url": "string",
			"pic": "string"
	},
	"FindList":{
			"queryId": "string",
			"url": "string",
			"title": "string",
			"list": "FindEntity[]"
	},
	"FindModule":{
			"down": "FindList",
			"up": "FindList",
			"title": "string"
	},
	"FindTopicHeader":{
			"title": "string",
			"followStr": "string",
			"desc": "string",
			"pic": "string"
	},
	"FindShop":{
			"shopId": "int",
			"price": "string",
			"location": "string",
			"subTitle": "string",
			"title": "string",
			"shopName": "string",
			"url": "string",
			"pic": "string"
	},
	"FindShopList":{
			"list": "FindShop[]"
	},
	"RecommendInfo":{
			"jumpUrl": "string",
			"desc": "string",
			"title": "string",
			"avatar": "string"
	},
	"SeatRecommendation":{
			"seatList": "Seat[]"
	},
	"ZeusSimilarBrowseProduct":{
			"defaultPicUrl": "string",
			"promoList": "TravelEvent[]",
			"detailUrl": "string",
			"saleCountText": "string",
			"saleCount": "int",
			"marketPrice": "int",
			"price": "int",
			"title": "string",
			"id": "int"
	},
	"ZeusSimilarBrowseProductResult":{
			"showNum": "int",
			"similarBrowseProduct": "ZeusSimilarBrowseProduct[]"
	},
	"OSShopHighlightDO":{
			"contentList": "string[]",
			"style": "int",
			"show": "boolean",
			"title": "string",
			"content": "string"
	},
	"BulletScreenList":{
			"timeInterval": "int",
			"bulletScreenList": "BulletScreen[]"
	},
	"ShopQuestion":{
			"url": "string",
			"answer": "string",
			"question": "string"
	},
	"BeautyToolBar":{
			"chatUrl": "string",
			"telPhone": "string[]",
			"bookUrl": "string"
	},
	"UpdateNewsTip":{
			"hasUpdate": "boolean",
			"tip": "string"
	},
	"FindTopicList":{
			"list": "FindEntity[]",
			"queryId": "string"
	},
	"PopupRedEnvelopeResponse":{
			"validDate": "string",
			"content": "string",
			"title": "string",
			"threshold": "string",
			"prize": "string",
			"status": "string",
			"involve": "int"
	},
	"JoyPromo":{
			"promoTitle": "string",
			"promoDesc": "string"
	},
	"BrandAdBean":{
			"brandAdList": "BrandAd[]"
	},
	"MTBabyIndexTabLinkDo":{
			"leftTabLink": "string",
			"rightTabLink": "string"
	},
	"Coach":{
			"isShopManager": "int",
			"score": "int",
			"tags": "string[]",
			"star": "int",
			"detailPageUrl": "string",
			"photoUrl": "string",
			"title": "string",
			"certified": "int",
			"name": "string",
			"uid": "int"
	},
	"CoachesResult":{
			"isMerchantShop": "int",
			"coaches": "Coach[]",
			"addUrl": "string",
			"listUrl": "string",
			"count": "int",
			"title": "string",
			"shopId": "int"
	},
	"WedShopPoi":{
			"phone": "string",
			"detailAddress": "string",
			"district": "string",
			"cityName": "string"
	},
	"OtaHotelPromoInfo":{
			"promoName": "string",
			"promoIntro": "string",
			"url": "string"
	},
	"OtaHotelBookingTag":{
			"type": "int",
			"title": "string"
	},
	"OtaHotelCampaign":{
			"title": "string",
			"isHighlight": "boolean"
	},
	"OtaHotelGoodsResult":{
			"otaPromoInfoList": "OtaHotelPromoInfo[]",
			"showNum": "int",
			"otaList": "HotelDetail[]",
			"taxesTips": "string",
			"hotelAnnounce": "string"
	},
	"HotelPrepayAndOtaGoodsList":{
			"prepayGoodsList": "HotelGoodsListResult",
			"otaGoodsList": "OtaHotelGoodsResult"
	},
	"KTVShopFeatureTag":{
			"name": "string",
			"pictureUrl": "string"
	},
	"KTVShopInfoWidget":{
			"roomIntro": "string",
			"featureTags": "KTVShopFeatureTag[]"
	},
	"EduShopPicListInfoDo":{
			"width": "int",
			"height": "int",
			"link": "string",
			"bigPicUrl": "string",
			"smallPicUrl": "string",
			"picType": "int"
	},
	"HotelTrafficV1":{
			"metroStation": "HotelLandmark[]",
			"hotMark": "HotelLandmark[]",
			"railwayStation": "HotelLandmark[]"
	},
	"HotelInfoDo":{
			"isOversea": "boolean",
			"phoneList": "string[]",
			"introduce": "string",
			"funFacilityList": "string[]",
			"policy": "HotelPolicy",
			"facilityList": "HotelFacility[]",
			"keyFacilityList": "HotelFacility[]",
			"openningTime": "string",
			"trafficList": "HotelTraffic[]",
			"trafficListV1": "HotelTrafficV1",
			"landmarkList": "HotelLandmark[]"
	},
	"EduProductTag":{
			"text": "string",
			"type": "int"
	},
	"EduProductCategory":{
			"link": "string",
			"name": "string"
	},
	"HomeCaseBasicInfo":{
			"style": "string",
			"estate": "string",
			"type": "string",
			"layout": "string",
			"price": "string",
			"area": "string",
			"name": "string",
			"productId": "int"
	},
	"HomeGroupInfo":{
			"properties": "Pair[]",
			"url": "string",
			"subTitle": "string",
			"title": "string"
	},
	"HomeConsultInfo":{
			"consultTitle": "string",
			"consultUnread": "boolean",
			"consultUrl": "string",
			"consultant": "boolean"
	},
	"HomeSimilarCaseWrap":{
			"caseList": "HomeDesignProductResultList",
			"url": "string",
			"subtitle": "string",
			"title": "string"
	},
	"HomeDesignCaseDetail":{
			"priceInfo": "HomeGroupInfo",
			"similarCaseWrap": "HomeSimilarCaseWrap",
			"designer": "HomeDesigner",
			"shop": "HomeCaseShop",
			"consultInfo": "HomeConsultInfo",
			"basicInfo": "HomeCaseBasicInfo"
	},
	"HomeCaseShop":{
			"address": "string",
			"voteTotal": "int",
			"shopPower": "int",
			"shopId": "int",
			"shopName": "string"
	},
	"MultiFilterItem":{
			"name": "string",
			"code": "string"
	},
	"TaMultiFilter":{
			"items": "MultiFilterItem[]",
			"isSupportMultiChoice": "int",
			"groupTitle": "string"
	},
	"TeacherResult":{
			"teachers": "Teacher[]",
			"shopId": "int",
			"addUrl": "string",
			"listUrl": "string",
			"tip": "string",
			"count": "int",
			"title": "string"
	},
	"Teacher":{
			"workYears": "string",
			"detailPageUrl": "string",
			"photoUrl": "string",
			"title": "string",
			"name": "string",
			"uid": "int"
	},
	"NoCommentMovieOrderList":{
			"list": "MovieTicketOrder[]",
			"count": "int"
	},
	"TaSpuAttr":{
			"attrValues": "SpuAttrValue[]",
			"name": "string"
	},
	"SpuAttrValue":{
			"attrId": "long",
			"value": "string"
	},
	"MovieDerivative":{
			"buyLink": "string",
			"marketPrice": "string",
			"sellPrice": "string",
			"image": "string",
			"name": "string",
			"movieDerivativeEntryId": "int",
			"id": "int"
	},
	"BabyPromo":{
			"content": "string",
			"title": "string"
	},
	"BabyBookingInfo":{
			"linkTitle": "string",
			"mainTitle": "string",
			"babyPromoList": "BabyPromo[]",
			"isSelectiveShop": "boolean",
			"isBooking": "boolean"
	},
	"HomeProductSearchResult":{
			"currentStyle": "Pair",
			"currentType": "Pair",
			"currentArea": "Pair",
			"homeProductList": "HomeDesignProduct[]",
			"filterNavi": "FilterNavi",
			"areaNavs": "Pair[]",
			"typeNavs": "Pair[]",
			"styleNavs": "Pair[]"
	},
	"BabyBrandIntroduct":{
			"title": "string",
			"desc": "string",
			"link": "string"
	},
	"BabyCourseIntroduct":{
			"uid": "int",
			"pic": "string",
			"name": "string",
			"originPrice": "string",
			"nowPrice": "string",
			"tagList": "string[]",
			"specialTag": "string"
	},
	"BabyCourseIntroductInfo":{
			"title": "string",
			"link": "string",
			"courseIntroList": "BabyCourseIntroduct[]"
	},
	"BabyFaculty":{
			"pic": "string",
			"name": "string",
			"qualify": "string"
	},
	"BabyFacultyInfo":{
			"title": "string",
			"facultyList": "BabyFaculty[]"
	},
	"FriendRelation":{
			"userId": "int",
			"nickName": "string",
			"face": "string"
	},
	"LetterFriend":{
			"friends": "FriendRelation[]",
			"letter": "string"
	},
	"NoticeFriend":{
			"bindwx": "string",
			"bindqq": "string",
			"letterFriends": "LetterFriend[]"
	},
	"HomeAdverSection":{
			"units": "HomeAdverUnit[]"
	},
	"AdBrandTag":{
			"icon": "string",
			"title": "string",
			"content": "string",
			"type": "int"
	},
	"HomeAdverUnit":{
			"titleIcon": "string"
	},
	"WatchShopDish":{
			"name": "string",
			"price": "string",
			"pic": "string"
	},
	"WatchShop":{
			"pic": "string",
			"shopId": "int",
			"shopName": "string",
			"power": "int",
			"price": "string",
			"location": "string",
			"dishes": "WatchShopDish[]"
	},
	"JoyBrandModule":{
			"tags": "Cell[]",
			"title": "string",
			"url": "string",
			"pic": "string",
			"shopId": "int",
			"brandId": "int"
	},
	"VCPayInfo":{
			"payToken": "string",
			"tradeNo": "string",
			"NewOrderId": "string",
			"orderId": "int"
	},
	"MovieDerivativeList":{
			"list": "MovieDerivative[]"
	},
	"MovieDerivativeEntry":{
			"isShowLink": "string",
			"entryLink": "string",
			"minMarketPrice": "string",
			"minSellPrice": "string",
			"image": "string",
			"shortTitle": "string",
			"movieId": "int",
			"id": "int"
	},
	"BabyProductProsInfo":{
			"productTagInfoList": "BabyProductPros[]",
			"moreHref": "string"
	},
	"BabyProductPros":{
			"pic": "string",
			"mainTitle": "string",
			"subTitle": "string"
	},
	"SpuReviewOverView":{
			"reviewDetaiUrl": "string",
			"totelReviewDec": "string",
			"totelReview": "int",
			"reviewRation": "int"
	},
	"ZeusPOIReview":{
			"totalReviewDesc": "string",
			"shopName": "string",
			"shopId": "int"
	},
	"ZeusProductReview":{
			"zeusPOIReview": "ZeusPOIReview[]",
			"zeusProductDefultPOI": "int"
	},
	"WatchReceiptGroupList":{
			"nextStartIndex": "int",
			"isEnd": "boolean",
			"list": "WatchReceipt[]"
	},
	"MidasPackageInfo":{
			"packageUrl": "string",
			"views": "string",
			"desc": "string",
			"version": "int"
	},
	"MidasAdInfo":{
			"packageVer": "int",
			"adData": "string",
			"viewId": "string"
	},
	"BookablePackage":{
			"buyUrl": "string",
			"stock": "int",
			"price": "double",
			"statusDesc": "string",
			"status": "int",
			"index": "int"
	},
	"ZeusProductBookingInfoItem":{
			"bookablePackages": "BookablePackage[]",
			"packageMoreDesc": "string",
			"packageShowNum": "int",
			"displayLeftStockThreshold": "int",
			"status": "int",
			"startDate": "string"
	},
	"ZeusProductPriceCalendarResult":{
			"zeusProductBookingInfo": "ZeusProductBookingInfoItem[]",
			"zeusProductPackageList": "ZeusSpuPackage[]"
	},
	"WatchReceipt":{
			"orderId": "string",
			"uid": "string",
			"title": "string",
			"date": "time",
			"code": "string",
			"status": "int"
	},
	"ZuesProduct":{
			"tagList": "string[]",
			"marketPrice": "string",
			"defaultPic": "string",
			"detailUrl": "string",
			"spuId": "int",
			"title": "string",
			"reiviewRatio": "string",
			"saleCountText": "string",
			"price": "string"
	},
	"PoiZeusProductListResult":{
			"zeusProductList": "ZuesProduct[]",
			"moreDesc": "string",
			"showNum": "int",
			"totalProductCountDesc": "string",
			"totalProductCount": "int",
			"groupTag": "string",
			"subGroupName": "string",
			"groupName": "string"
	},
	"FlowerDealGroup":{
			"deliveryDesc": "string",
			"isDelivery": "int",
			"categories": "string[]",
			"picUrl": "string",
			"dealGroupPrice": "double",
			"marketPrice": "double",
			"title": "string",
			"dealGroupId": "int"
	},
	"FlowerDealGroupCategory":{
			"count": "int",
			"name": "string"
	},
	"FlowerDealGroupList":{
			"categories": "FlowerDealGroupCategory[]",
			"dealGroups": "FlowerDealGroup[]"
	},
	"FlowerDeliveryInfo":{
			"name": "string",
			"gender": "int",
			"mobile": "string",
			"address": "string",
			"houseNumber": "string",
			"uid": "int"
	},
	"ObtainCouponResult":{
			"icon": "string",
			"title": "string",
			"type": "int"
	}
};



export default {
   modelsForClass(className) {
  	var ms = {};
  	var modelPros = models[className];
  	if (!modelPros) return ms;
  	ms[className] = modelPros;

  	for(var proName in modelPros) {
  		if (!modelPros.hasOwnProperty(proName)) continue;
  		var proType = modelPros[proName];
  		var proClass = proType.replace('[]', '');
  		if (proClass === 'boolean' || proClass === 'int' || proClass === 'string'
  			|| proClass === 'time' || proClass === 'double' || proClass === 'long') {
  			continue;
  		} else {
  			var subms = this.modelsForClass(proClass);
  			for (var subClassName in subms) {
  				ms[subClassName] = subms[subClassName];
  			}
  		}
  	}
  	return ms;
  }
};
