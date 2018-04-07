<template>
  <el-form ref="form" label-width="100px" v-model="form">
    <h3 class="film-panel-title">电影基本信息</h3>
    <el-row>
      <el-col :span="12">
        <el-form-item label="中文名字" required>
          <el-input v-model="form.name_cn"></el-input>
        </el-form-item>
        <el-form-item label="英文名字" required>
          <el-input v-model="form.name_en"></el-input>
        </el-form-item>
        <el-form-item label="发行时间">
          <el-date-picker v-model="form.release_date" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="封面图">
          <el-upload class="pic-uploader" action="/api/v1/uploadfile" :show-file-list="false" :on-success="uploadSuccess" :on-error="uploadError" :before-upload="beforeAvatarUpload" :multiple="false">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="语言">
          <el-select v-model="form.language" filterable placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="发行国家">
          <el-select v-model="form.language" filterable placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="IMDB评分">
          <el-input v-model="form.imdb_score"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="主演">
          <el-input v-model="form.stars"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="导演">
          <el-input v-model="form.director"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="编剧">
          <el-input v-model="form.writers"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item label="剧情简介">
      <el-input type="textarea" v-model="form.storyline"></el-input>
    </el-form-item>
    <h3 class="film-panel-title">文件信息</h3>
    <el-row>
      <el-col :span="8">
        <el-form-item label="时长">
          <el-input v-model="form.runtime"></el-input>
        </el-form-item>
        <el-form-item label="文件大小">
          <el-input v-model="form.size"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="文件分辨率">
          <el-input v-model="form.resolution"></el-input>
        </el-form-item>
        <el-form-item label="文件后缀">
          <el-input v-model="form.extension"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="类型">
          <el-input v-model="form.types"></el-input>
        </el-form-item>
        <el-form-item label="字幕">
          <el-input v-model="form.subtitle"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item label="下载链接">
      <el-input v-model="form.download_url"></el-input>
    </el-form-item>
  </el-form>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import filmMod from "@/store/model/film";
import sizeUnit from "@/store/enum/film_sizeUnit";

export default {
  data() {
    return {
      form: filmMod,
      sizeUnit: sizeUnit,
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      imageUrl: ""
    };
  },
  mounted() {},
  computed: {
    ...mapGetters("film", {
      form2: "generalForm"
    })
  },
  methods: {
    submit() {
      console.log(this.form);
    },
    beforeAvatarUpload(file) {
      const isImg = /image\/(jpeg|png|jpg)/gi.test(file.type);
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isImg) {
        this.$message.error(
          "上传头像图片只能是图片（jpeg/png/jpg）格式中的一种!"
        );
        return isImg;
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
        return isLt2M;
      }
      return isImg && isLt2M;
    },
    uploadSuccess(resp, file, filelist) {
      console.log("上传成功结果 >>>>>> line:157", resp);
      this.imageUrl = resp.data.url;
    },
    uploadError(err, file, filelist) {
      console.log("上传失败结果 >>>>>> line:159", err);
    },
    handleRemove() {}
  }
};
</script>
<style lang="scss" scoped>
.film-panel-title {
  padding-left: 20px;
  line-height: 35px;
}
.el-upload__tip {
  margin-top: 0;
  line-height: 30px;
}
.el-form {
  .el-select,
  .el-date-editor {
    width: 100%;
  }
}
.pic-uploader {
  /deep/ .el-upload {
    border: 1px dashed #ccc;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
    width: 280px;
    height: 140px;
    overflow: hidden;
    &:hover {
      border-color: #409eff;
    }
  }
  /deep/ .avatar-uploader-icon {
    width: 280px;
    height: 140px;
    line-height: 140px;
    text-align: center;
    font-size: 32px;
  }
  /deep/ img {
    max-height: 100%;
  }
}
</style>
