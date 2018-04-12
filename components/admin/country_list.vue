<template>
  <div class="container">
    <h3>国家信息</h3>
    <el-table :data="data" stripe style="width: 100%;margin-right:-15px;">
      <el-table-column type="selection" width="50">
      </el-table-column>
      <el-table-column prop="id" label="ID" width="180">
      </el-table-column>
      <el-table-column prop="cn_name" label="中文名字" width="180">
      </el-table-column>
      <el-table-column prop="native_name" label="英文文名字" width="180">
      </el-table-column>
      <el-table-column prop="country_code" label="编码">
      </el-table-column>
      <el-table-column prop="info.population" label="人口">
      </el-table-column>
      <el-table-column prop="info.population" label="操作" width="120">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click.native.prevent="editCountry()">
            编辑
          </el-button>
          <el-button type="text" size="small" @click.native.prevent="delCountry()">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>
<script>
export default {
  created() {
    // console.log(this.data)
  },
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  methods: {
    editCountry() {},
    delCountry() {}
  }
};
</script>
<style scoped>
.container {
  padding: 0 15px;
}
h3 {
  padding: 15px;
  border-bottom: 1px solid #d8d9d9;
}
</style>
