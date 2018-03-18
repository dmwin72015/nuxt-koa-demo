<template>
  <section id="user-from">
    <div class="form-group">
      <label for="">用户名</label>
      <input type="text" class="form-control" placeholder="用户名">
    </div>
    <div class="form-group">
      <label for="">住址</label>
      <input type="text" class="form-control" placeholder="住址">
    </div>
    <div class="form-group">
      <label for="">年龄</label>
      <input type="text" class="form-control" placeholder="年龄">
    </div>
    <div class="form-group">
      <label for="">职业</label>
      <input type="text" class="form-control" placeholder="职业">
    </div>
    <button type="submit" class="btn btn-primary">保存</button>
  </section>
</template>
<style lang="scss">
$form-group-margin-bottom:1em;

#user-from {
  width: 600px;
  margin: 20px auto;
}

.form-control {
  display: block;
  width: 100%;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.form-group {
  margin-bottom: $form-group-margin-bottom;
}

.btn {
  display: inline-block;
  outline: none;
  cursor: pointer;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

</style>
<script>
export default {

}

</script>
