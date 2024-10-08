export type CoinDetails = {
    "id": string,
    "symbol": string,
    "name": string,
    "asset_platform_id": null,
    "platforms": {
      "": string
    },
    "detail_platforms": {
      "": {
        "decimal_place": null,
        "contract_address": string
      }
    },
    "block_time_in_minutes": number,
    "hashing_algorithm": string,
    "categories": [
        string,
        string,
        string
    ],
    "preview_listing": boolean,
    "public_notice": null,
    "additional_notices": [],
    "description": {
      "en": string
    },
    "links": {
      "homepage": [
        string,
        string,
        string
      ],
      "blockchain_site": [
        string,
        string,
        string,
        string,
        string,
        "",
        "",
        "",
        "",
        ""
      ],
      "official_forum_url": [
        string,
        "",
        ""
      ],
     
      "twitter_screen_name": string,
      "facebook_username": string,
      "bitcointalk_thread_identifier": null,
      "telegram_channel_identifier": string,
      "subreddit_url": string,
      "repos_url": {
        "github": [
            string,
            string
        ],
        "bitbucket": []
      }
    },
    "image": {
      "thumb": string,
      "small": string,
      "large": string
    },
    "country_origin": string,
    "genesis_date": string,
    "sentiment_votes_up_percentage": number,
    "sentiment_votes_down_percentage": number,
    "watchlist_portfolio_users": number,
    "market_cap_rank": number,
    "coingecko_rank": number,
    "coingecko_score": number,
    "developer_score": number,
    "community_score": number,
    "liquidity_score": number,
    "public_interest_score": number,
    "market_data": {
      "current_price": {
        "usd": number,
      },
      "total_value_locked": null,
      "mcap_to_tvl_ratio": null,
      "fdv_to_tvl_ratio": null,
      "roi": null,
      "market_cap": {
        "usd": number,
      },
      "market_cap_rank": number,
      "fully_diluted_valuation": {
        "usd": number,
      },
      "market_cap_fdv_ratio": number,
      "total_volume": {
        "usd": number,
      },
      "price_change_24h": number,
      "price_change_percentage_24h": number,
      "price_change_percentage_7d": number,
      "price_change_percentage_14d": number,
      "price_change_percentage_30d": number,
      "price_change_percentage_60d": number,
      "price_change_percentage_200d": number,
      "price_change_percentage_1y": number,
      "market_cap_change_24h": number,
      "market_cap_change_percentage_24h": number,
      "total_supply": number,
      "max_supply": number,
      "circulating_supply": number,
      "sparkline_7d": {
        "price": number []
      },
      "last_updated": string
    },
    "public_interest_stats": {
      "alexa_rank":number,
      "bing_matches": null
    },
    "status_updates": [],
    "last_updated": string
  }