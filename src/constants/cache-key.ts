const My_SYSTEM_NAME = "my-v3"
/** 缓存数据会用到的 key */
class CacheKey {
  static readonly Token = `${My_SYSTEM_NAME}-token-key`
  static readonly VISITED_VIEWS = `${My_SYSTEM_NAME}-visited-views-key`
  static readonly CACHED_VIEWS = `${My_SYSTEM_NAME}-cached-views-key`
}

export default CacheKey